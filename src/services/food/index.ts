import Day, { DayData } from '@models/Day';
import DailyMeal, { DailyMealData, MealType, MealTypeKey } from '@models/DailyMeal';
import Food, { FoodData } from '@models/Food';
import Serving, { ServingData } from '@models/Serving';
import FoodItem, { FoodItemData } from '@models/FoodItem';
import { addDailyMeal, addDay, addFood, addFoodItem, addServing, deleteFoodItem, fetchDay, fetchDayRange, fetchDays, fetchFoodItems, fetchFoods, fetchServings, findDailMealById, findFoodByFoodId, findFoodById, searchFoodByName, updateDailyMeal, updateDay } from '@services/food/crud';
import { FullFoodItem, SearchFoodResult, SearchResult, Target } from '@services/food/types';
import { formatDay } from '@utils/index';
import { searchFoodApi } from './api';
import database from 'src/db';

export const getOrCreateDay = async (day: Date, target: Target, mealTargets: Record<MealTypeKey, Target>): Promise<[Day, DailyMeal[]]> => {

    const dayRecord = await fetchDay(day);
    if (dayRecord) {
        const meals = await dayRecord.meals;
        if (!meals || meals.length == 0 || !meals[0]) {
            throw new Error('Cannot create Daily Meal records');
        }
        return [dayRecord, meals];
    }

    const dayEntry = await createDay(day, target);
    if (!dayEntry) {
        throw new Error('Cannot create Day record');
    }

    const meals = await Promise.all(Object.keys(MealType).map(type => createMeal(dayEntry, type as MealTypeKey, mealTargets[type as MealTypeKey])));
    if (!meals || meals.length == 0 || !meals[0]) {
        throw new Error('Cannot create Daily Meal records');
    }

    return [dayEntry, meals];
}

export const createDay = async (day: Date, target: Target): Promise<Day> => {
    const dayData: DayData = {
        date: formatDay(day),
        totalCalories: 0,
        totalProtein: 0,
        totalCarbs: 0,
        totalFats: 0,
        targetCalories: target.calories,
        targetProtein: target.proteins,
        targetCarbs: target.carbs,
        targetFats: target.fat,
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
        targetProtein: target.proteins,
        targetCarbs: target.carbs,
        targetFats: target.fat,
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
    const factor = serving.amount * quantity / 100;

    const foodItemData: FoodItemData = {
        meal: meal,
        serving: serving,
        food: food,
        quantity: quantity,
        calories: factor * food.calories,
        carbs: factor * food.carbs,
        fat: factor * food.fat,
        proteins: factor * food.proteins,
    };

    return await addFoodItem(foodItemData);
};

export const updateMealAggregates = async (meal: DailyMeal, foodItem: FoodItem, add: boolean): Promise<DailyMeal> => {
    const dayRecord = await meal.day;
    if (!dayRecord) {
        throw new Error('Cannot load Day record');
    }

    const operation = add ? 1: -1;
    const updates: Partial<DailyMeal> = {
        totalCalories: Math.max(0, meal.totalCalories + operation * foodItem.calories),
        totalCarbs: Math.max(0, meal.totalCarbs + operation * foodItem.carbs),
        totalFats: Math.max(0, meal.totalFats + operation * foodItem.fat),
        totalProtein: Math.max(0, meal.totalProtein + operation * foodItem.proteins),
    };

    const mealUpdated = await updateDailyMeal(meal, updates);
    if (!mealUpdated) {
        throw new Error('Cannot update DailyMeal aggregate');
    }

    const day = await updateDayAggregates(dayRecord, foodItem, add);

    return mealUpdated;
};

export const updateDayAggregates = async (day: Day, foodItem: FoodItem, add: Boolean): Promise<Day> => {
    const operation = add ? 1: -1;
    const updates: Partial<DailyMeal> = {
        totalCalories: Math.max(0, day.totalCalories + operation * foodItem.calories),
        totalCarbs: Math.max(0, day.totalCarbs + operation * foodItem.carbs),
        totalFats: Math.max(0, day.totalFats + operation * foodItem.fat),
        totalProtein: Math.max(0, day.totalProtein + operation * foodItem.proteins),
    };

    const dayUpdated = await updateDay(day, updates);
    if (!dayUpdated) {
        throw new Error('Cannot update Day aggregate');
    }

    return dayUpdated;
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


export const unlogFood = async (meal: DailyMeal, foodItem: FoodItem): Promise<DailyMeal> => {
    const updatedMeal = await updateMealAggregates(meal, foodItem, false);

    await deleteFoodItem(foodItem);

    return updatedMeal;
};

export const getDayRange = async (startDay: Date, endDay: Date): Promise<Day[]> => {
    return await fetchDayRange(startDay, endDay);
};

export const getFullFoodItem = async (foodItem: FoodItem): Promise<FullFoodItem> => {
    const food = await foodItem.food;
    const serving = await foodItem.serving;

    if (!food || !serving) {
        throw new Error('Cannot load Food and Serving records');
    }

    return {
        foodItem,
        food,
        serving
    };
}

export const getMeal = async (mealId: string): Promise<[DailyMeal, Day]> => {
    const meal = await findDailMealById(mealId);
    if (!meal) {
        throw new Error('Cannot load DailyMeal record');
    }

    const day = await meal.day;
    if (!day) {
        throw new Error('Cannot load Day');
    }

    return [meal, day];
};

export const getFoodItemsFromMeal = async (meal: DailyMeal): Promise<FullFoodItem[]> => {
    const foodItems = await meal.foodItems;
    const fullFoodItems = await Promise.all((foodItems ?? []).map(foodItem => getFullFoodItem(foodItem)));
    return fullFoodItems;
}

export const searchFood = async (text: string): Promise<SearchFoodResult[]> => {
    try {
        const response = await searchFoodApi(text);
        return response.data.content;
    } catch (e: any) {
        console.log('Error:', e.message);
        return [];
    }
};

export const searchFoodLocal = async (text: string): Promise<Food[]> => {
    return searchFoodByName(text);
};

export const getOrCreateFood = async (foodSearchResult: SearchFoodResult): Promise<Food> => {
    const foodRecord = await findFoodByFoodId(foodSearchResult.id);
    if (foodRecord) {
        return foodRecord;
    }

    const foodData: FoodData = {
        foodId: foodSearchResult.id,
        name: foodSearchResult.name,
        calories: foodSearchResult.calories,
        proteins: foodSearchResult.proteins,
        carbs: foodSearchResult.carbs,
        fat: foodSearchResult.fat,
    }
    
    const foodEntry = await addFood(foodData);
    if (!foodEntry) {
        throw new Error('Cannot create Food entry');
    }
    
    const servingData: ServingData = {
        food: foodEntry,
        name: '100g',
        amount: 100
    };

    const servingEntry = await addServing(servingData);
    if (!servingEntry) {
        throw new Error('Cannot create Serving entry');
    }

    return foodEntry;
};

export const getFoodWithServingsAndMeal = async (foodId: string, mealId: string): Promise<[DailyMeal, Food, Serving[]]> => {
    const food = await findFoodById(foodId);
    if (!food) {
        throw new Error('Cannot load Food record');
    }

    const meal = await findDailMealById(mealId);
    if (!meal) {
        throw new Error('Cannot load DailyMeal record');
    }

    const servings = await food.servings;
    return [meal, food, servings];
};