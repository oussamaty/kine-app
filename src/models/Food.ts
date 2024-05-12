import { Model } from '@nozbe/watermelondb';
import { field, children } from '@nozbe/watermelondb/decorators';
import Serving from '@models/Serving';
import { Associations } from '@nozbe/watermelondb/Model';
import FoodItem from '@models/FoodItem';

class Food extends Model {
  static table = 'food';
  static associations: Associations = {
    servings: { type: 'has_many', foreignKey: 'food_id' },
    food_items: { type: 'has_many', foreignKey: 'food_id' },
  };

  @field('fid') foodId!: number;
  @field('name') name!: string;
  @field('calories') calories!: number;
  @field('carbs') carbs!: number;
  @field('protein') protein!: number;
  @field('fats') fats!: number;
  @children('servings') servings!: Serving[];
  @children('food_items') foodItems!: FoodItem[];
};

export type FoodData = {
  foodId: number,
  name: string,
  calories: number,
  carbs: number,
  protein: number,
  fats: number,
};

export default Food;