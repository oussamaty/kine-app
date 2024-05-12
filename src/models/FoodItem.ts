import { Model } from "@nozbe/watermelondb";
import { field, relation } from "@nozbe/watermelondb/decorators";
import Serving from "@models/Serving";
import DailyMeal from "@models/DailyMeal";
import { Associations } from "@nozbe/watermelondb/Model";
import Food from "@models/Food";

class FoodItem extends Model {
    static table = 'food_items';
    static associations: Associations = {
      meal: { type: 'belongs_to', key: 'meal_id' },
      serving: { type: 'belongs_to', key: 'serving_id' },
      food: { type: 'belongs_to', key: 'food_id' }
    };
  
    @relation('meal', 'meal_id') meal!: DailyMeal;
    @relation('serving', 'serving_id') serving!: Serving;
    @relation('food', 'food_id') food!: Food;
    @field('quantity') quantity!: number;
    @field('calories') calories!: number;
    @field('fats') fats!: number;
    @field('carbs') carbs!: number;
    @field('protein') protein!: number;
};

export type FoodItemData = {
  meal: DailyMeal,
  serving: Serving,
  food: Food,
  quantity: number,
  calories: number,
  fats: number,
  carbs: number,
  protein: number,
};

export default FoodItem;