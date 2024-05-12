import database from '@db/index';
import Day, { DayData } from '@models/Day';
import DailyMeal, { DailyMealData } from '@models/DailyMeal';
import Food, { FoodData } from '@models/Food';
import Serving, { ServingData } from '@models/Serving';
import FoodItem, { FoodItemData } from '@models/FoodItem';
import { Q } from '@nozbe/watermelondb';
import { formatDay } from '@utils/index';

// Day CRUD operations
export const fetchDay = async (day: Date): Promise<Day | null> => {
    const days = await database.collections.get<Day>('days').query(Q.where('date', Q.eq(formatDay(day)))).fetch();
    return days.length > 0 ? days[0] : null;
}

export const fetchDays = async (): Promise<Day[]> => {
    return await database.collections.get<Day>('days').query().fetch();
};

export const addDay = async (dayData: DayData): Promise<Day> => {
    return await database.action(async () => {
        return await database.collections.get<Day>('days').create((day: any) => {
            day.date = dayData.date;
            day.totalCalories = dayData.totalCalories;
            day.totalProtein = dayData.totalProtein;
            day.totalCarbs = dayData.totalCarbs;
            day.totalFats = dayData.totalFats;
            day.targetCalories = dayData.targetCalories;
            day.targetProtein = dayData.targetProtein;
            day.targetCarbs = dayData.targetCarbs;
            day.targetFats = dayData.targetFats;
        });
    });
};

export const updateDay = async (day: Day, dayData: Partial<DayData>): Promise<Day> => {
    return await database.action(async () => {
        await day.update((d) => {
            d.date = dayData.date ?? d.date;
            d.totalCalories = dayData.totalCalories ?? d.totalCalories;
            d.totalProtein = dayData.totalProtein ?? d.totalProtein;
            d.totalCarbs = dayData.totalCarbs ?? d.totalCarbs;
            d.totalFats = dayData.totalFats ?? d.totalFats;
            d.targetCalories = dayData.targetCalories ?? d.targetCalories;
            d.targetProtein = dayData.targetProtein ?? d.targetProtein;
            d.targetCarbs = dayData.targetCarbs ?? d.targetCarbs;
            d.targetFats = dayData.targetFats ?? d.targetFats;
        });
        return day;
    });
};

export const deleteDay = async (day: Day): Promise<Day> => {
    return await database.action(async () => {
        await day.markAsDeleted();
        return day;
    });
};

// DailyMeal CRUD operations
export const fetchDailyMeals = async (): Promise<DailyMeal[]> => {
    return await database.collections.get<DailyMeal>('daily_meals').query().fetch();
};

export const addDailyMeal = async (mealData: DailyMealData): Promise<DailyMeal> => {
    return await database.action(async () => {
        return await database.collections.get<DailyMeal>('daily_meals').create((meal: any) => {
            meal.day.set(mealData.day);
            meal.type = mealData.type;
            meal.totalCalories = mealData.totalCalories;
            meal.totalProtein = mealData.totalProtein;
            meal.totalCarbs = mealData.totalCarbs;
            meal.totalFats = mealData.totalFats;
            meal.targetCalories = mealData.targetCalories;
            meal.targetProtein = mealData.targetProtein;
            meal.targetCarbs = mealData.targetCarbs;
            meal.targetFats = mealData.targetFats;
        });
    });
};

export const updateDailyMeal = async (meal: DailyMeal, mealData: Partial<DailyMealData>): Promise<DailyMeal> => {
    return await database.action(async () => {
        await meal.update((m) => {
            m.type = mealData.type ?? m.type;
            m.totalCalories = mealData.totalCalories ?? m.totalCalories;
            m.totalProtein = mealData.totalProtein ?? m.totalProtein;
            m.totalCarbs = mealData.totalCarbs ?? m.totalCarbs;
            m.totalFats = mealData.totalFats ?? m.totalFats;
            m.targetCalories = mealData.targetCalories ?? m.targetCalories;
            m.targetProtein = mealData.targetProtein ?? m.targetProtein;
            m.targetCarbs = mealData.targetCarbs ?? m.targetCarbs;
            m.targetFats = mealData.targetFats ?? m.targetFats;
        });
        return meal;
    });
};

export const deleteDailyMeal = async (meal: DailyMeal): Promise<DailyMeal> => {
    return await database.action(async () => {
        await meal.markAsDeleted();
        return meal;
    });
};

// Food CRUD operations
export const fetchFoods = async (): Promise<Food[]> => {
    return await database.collections.get<Food>('food').query().fetch();
};

export const addFood = async (foodData: FoodData): Promise<Food> => {
    return await database.action(async () => {
        return await database.collections.get<Food>('food').create((food: any) => {
            food.name = foodData.name;
            food.calories = foodData.calories;
            food.carbs = foodData.carbs;
            food.protein = foodData.protein;
            food.fats = foodData.fats;
        });
    });
};

export const updateFood = async (food: Food, foodData: Partial<FoodData>): Promise<Food> => {
    return await database.action(async () => {
        await food.update((f) => {
            f.name = foodData.name ?? f.name;
            f.calories = foodData.calories ?? f.calories;
            f.carbs = foodData.carbs ?? f.carbs;
            f.protein = foodData.protein ?? f.protein;
            f.fats = foodData.fats ?? f.fats;
        });
        return food;
    });
};

export const deleteFood = async (food: Food): Promise<Food> => {
    return await database.action(async () => {
        await food.markAsDeleted();
        return food;
    });
};

// Serving CRUD operations
export const fetchServings = async (): Promise<Serving[]> => {
    return await database.collections.get<Serving>('servings').query().fetch();
};

export const addServing = async (servingData: ServingData): Promise<Serving> => {
    return await database.action(async () => {
        return await database.collections.get<Serving>('servings').create((serving: any) => {
            serving.food.set(servingData.food);
            serving.name = servingData.name;
            serving.amount = servingData.amount;
        });
    });
};

export const updateServing = async (serving: Serving, servingData: Partial<ServingData>): Promise<Serving> => {
    return await database.action(async () => {
        await serving.update((s) => {
            s.name = servingData.name ?? s.name;
            s.amount = servingData.amount ?? s.amount;
        });
        return serving;
    });
};

export const deleteServing = async (serving: Serving): Promise<Serving> => {
    return await database.action(async () => {
        await serving.markAsDeleted();
        return serving;
    });
};

// FoodItem CRUD operations
export const fetchFoodItems = async (): Promise<FoodItem[]> => {
     return await database.collections.get<FoodItem>('food_items').query().fetch();
};

export const addFoodItem = async (foodItemData: FoodItemData): Promise<FoodItem> => {
    return await database.action(async () => {
        return await database.collections.get<FoodItem>('food_items').create((foodItem: any) => {
            foodItem.meal.set(foodItemData.meal);
            foodItem.serving.set(foodItemData.serving);
            foodItem.food.set(foodItemData.food);
            foodItem.quantity = foodItemData.quantity;
            foodItem.calories = foodItemData.calories;
            foodItem.carbs = foodItemData.carbs;
            foodItem.fats = foodItemData.fats;
            foodItem.protein = foodItemData.protein;
        });
    });
};

export const updateFoodItem = async (foodItem: FoodItem, foodItemData: Partial<FoodItemData>): Promise<FoodItem> => {
    return await database.action(async () => {
        await foodItem.update((f) => {
            f.quantity = foodItemData.quantity ?? f.quantity;
            f.calories = foodItemData.calories ?? f.calories;
            f.carbs = foodItemData.carbs ?? f.carbs;
            f.fats = foodItemData.fats ?? f.fats;
            f.protein = foodItemData.protein ?? f.protein;
        });
        return foodItem;
    });
};

export const deleteFoodItem = async (foodItem: FoodItem): Promise<FoodItem> => {
    return await database.action(async () => {
        await foodItem.markAsDeleted();
        return foodItem;
    });
};
