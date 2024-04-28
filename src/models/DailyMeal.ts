import { Model } from "@nozbe/watermelondb";
import { children, field, relation } from "@nozbe/watermelondb/decorators";
import Day from "@models/Day";
import FoodItem from "@models/FoodItem";
import { Associations } from "@nozbe/watermelondb/Model";

class DailyMeal extends Model {
    static table = 'daily_meals';
    static associations: Associations  = {
        days: { type: "belongs_to", key: 'day_id' },
        food_items: { type: "has_many", foreignKey: 'meal_id' },
    };
    
    @relation('days', 'day_id') day!: Day;
    @field('type') type!: string;
    @field('total_calories') totalCalories!: number;
    @field('total_protein') totalProtein!: number;
    @field('total_carbs') totalCarbs!: number;
    @field('total_fats') totalFats!: number;
    @field('target_calories') targetCalories!: number;
    @field('target_protein') targetProtein!: number;
    @field('target_carbs') targetCarbs!: number;
    @field('target_fats') targetFats!: number;
    @children('food_items') foodItems!: FoodItem[];
}

export default DailyMeal;