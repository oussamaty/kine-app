import { Model } from "@nozbe/watermelondb";
import { field, relation } from "@nozbe/watermelondb/decorators";
import Serving from "@models/Serving";
import DailyMeal from "@models/DailyMeal";
import { Associations } from "@nozbe/watermelondb/Model";
import Food from "@models/Food";

class FoodItem extends Model {
    static table = 'food_items';
    static associations: Associations = {
      daily_meals: { type: 'belongs_to', key: 'meal_id' },
      food: { type: 'belongs_to', key: 'food_id' },
      servings: { type: 'belongs_to', key: 'serving_id' },
    };
  
    @relation('daily_meals', 'meal_id') meal!: DailyMeal;
    @relation('food', 'food_id') food!: Food;
    @relation('servings', 'serving_id') serving!: Serving;
    @field('quantity') quantity!: number;
    @field('calories') calories!: number;
    @field('fat') fat!: number;
    @field('carbs') carbs!: number;
    @field('proteins') proteins!: number;
};

export type FoodItemData = {
  meal: DailyMeal,
  food: Food,
  serving: Serving,
  quantity: number,
  calories: number,
  fat: number,
  carbs: number,
  proteins: number,
};

export default FoodItem;