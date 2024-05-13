import Food, { FoodData } from "@models/Food";
import FoodItem from "@models/FoodItem";
import Serving, { ServingData } from "@models/Serving";
import { NutrientKey } from "@redux/types/userTypes";

export type Target = {
    calories: number;
} & Record<NutrientKey, number>;

export type FullFoodItem = {
    foodItem: FoodItem;
    food: Food;
    serving: Serving;
};

export type SearchResult = {
    food: FoodData;
    servings: ServingData[];
};

export type SearchFoodResult = Omit<FoodData, 'foodId'> & { id: number };