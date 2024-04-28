import { Model } from '@nozbe/watermelondb';
import { field, children } from '@nozbe/watermelondb/decorators';
import Serving from '@models/Serving';
import { Associations } from '@nozbe/watermelondb/Model';

class Food extends Model {
  static table = 'food';
  static associations: Associations = {
    servings: { type: 'has_many', foreignKey: 'food_id' },
  };

  @field('name') name!: string;
  @field('calories') calories!: number;
  @field('carbs') carbs!: number;
  @field('protein') protein!: number;
  @field('fats') fats!: number;
  @children('servings') servings!: Serving[];
}

export default Food;