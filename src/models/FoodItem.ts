import { Model } from "@nozbe/watermelondb";
import { field, relation } from "@nozbe/watermelondb/decorators";
import Serving from "@models/Serving";
import DailyMeal from "@models/DailyMeal";
import { Associations } from "@nozbe/watermelondb/Model";

class FoodItem extends Model {
    static table = 'food_items';
    static associations: Associations = {
      daily_meals: { type: 'belongs_to', key: 'meal_id' },
      servings: { type: 'belongs_to', key: 'serving_id' },
    };
  
    @relation('daily_meals', 'meal_id') daily_meals!: DailyMeal;
    @relation('servings', 'serving_id') serving!: Serving;
    @field('food_id') foodId!: number;
    @field('quantity') quantity!: number;
    @field('calories') calories!: number;
    @field('carbs') carbs!: number;
    @field('protein') protein!: number;
    @field('fats') fats!: number;
}

export default FoodItem;