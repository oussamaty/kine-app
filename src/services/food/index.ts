import database from '@db/index';
import Day, { DayData } from '@models/Day';
import DailyMeal, { DailyMealData, MealType, MealTypeKey } from '@models/DailyMeal';
import Food, { FoodData } from '@models/Food';
import Serving, { ServingData } from '@models/Serving';
import FoodItem, { FoodItemData } from '@models/FoodItem';
import { Q } from '@nozbe/watermelondb';
import { addDailyMeal, addDay, addFood, addFoodItem, addServing, fetchDay, updateDay } from '@services/food/crud';
import { Target } from '@services/food/types';

export const getOrCreateDay = async (day: Date, target: Target, mealTargets: Record<MealTypeKey, Target>): Promise<Day> => {
    const dayRecord = await fetchDay(day);
    if (dayRecord) return dayRecord;

    const dayEntry = await createDay(day, target);
    if (!dayEntry) {
        throw new Error('Cannot create Day record');
    }

    const meals = await Promise.all(Object.keys(MealType).map(type => createMeal(dayEntry, type as MealTypeKey, mealTargets[type as MealTypeKey])));
    if (!meals || meals.length == 0 || !meals[0]) {
        throw new Error('Cannot create Daily Meal records');
    }

    return dayEntry;
}

export const createDay = async (day: Date, target: Target): Promise<Day> => {
    const dayData: DayData = {
        date: day,
        totalCalories: 0,
        totalProtein: 0,
        totalCarbs: 0,
        totalFats: 0,
        targetCalories: target.calories,
        targetProtein: target.protein,
        targetCarbs: target.carbs,
        targetFats: target.fats,
    };

    return await addDay(dayData);
};

export const createMeal = async (day: Day, type: MealTypeKey, target: Target): Promise<DailyMeal> => {
    const mealData: DailyMealData = {
        day: day,
        type: type,
        totalCalories: 0,
        totalProtein: 0,
        totalCarbs: 0,
        totalFats: 0,
        targetCalories: target.calories,
        targetProtein: target.protein,
        targetCarbs: target.carbs,
        targetFats: target.fats,
    };

    return await addDailyMeal(mealData);
};

export const createFoodWithServings = async (foodData: FoodData, servingsData: Omit<ServingData, 'food'>[]): Promise<[Food, Serving]> => {
    const foodRecord = await addFood(foodData);
    if (!foodRecord) {
        throw new Error('Cannot create Food record');
    }

    const servings = await Promise.all(servingsData.map(servingData => createServing(foodRecord, servingData)));
    if (!servings || servings.length == 0 || !servings[0]) {
        throw new Error('Cannot create Serving records');
    }

    return [foodRecord, servings[0]];
};

export const createServing = async (food: Food, servingData: Omit<ServingData, 'food'>): Promise<Serving> => {
    return await addServing({ food: food, ...servingData });
};

export const createFoodItem = async (meal: DailyMeal, food: Food, serving: Serving, quantity: number): Promise<FoodItem> => {
    const foodItemData: FoodItemData = {
        food: food,
        meal: meal,
        serving: serving,
        quantity: quantity,
        calories: ,
        carbs: ,
        fats: ,
        protein: ,
    };

    return await addFoodItem(foodItemData);
};

export const createAndLogFood = async (meal: DailyMeal, foodData: FoodData, servingsData: Omit<ServingData, 'food'>[], quantity: number): Promise<FoodItem> => {
    const [foodRecord, servingRecord] = await createFoodWithServings(foodData, servingsData);
    const foodItem = await createFoodItem(meal, foodRecord, servingRecord, quantity);
    if (!foodItem) {
        throw new Error('Cannot create FoodItem record');
    }

    const updatedMeal = await updateMealAggregates(meal, foodItem, true);
    return foodItem;
};

export const logFood = async (meal: DailyMeal, food: Food, serving: Serving, quantity: number): Promise<FoodItem> => {
    const foodItem = await createFoodItem(meal, food, serving, quantity);
    if (!foodItem) {
        throw new Error('Cannot create FoodItem record');
    }
    
    const updatedMeal = await updateMealAggregates(meal, foodItem, true);
    return foodItem;
};

export const updateMealAggregates = async (meal: DailyMeal, food: Food, foodItem: FoodItem, add: boolean): Promise<DailyMeal> => {
    const operation = add ? 1: -1
    const updates: Partial<DailyMeal> = {
        totalCalories: meal.totalCalories + operation * foodItem.,
        totalCarbs: meal.totalCarbs,
        totalFats: meal.totalFats,
        totalProtein: meal.totalProtein,
    }
}