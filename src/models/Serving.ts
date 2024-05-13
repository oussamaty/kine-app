import { Model } from '@nozbe/watermelondb';
import { children, field, relation } from '@nozbe/watermelondb/decorators';
import Food from '@models/Food';
import { Associations } from '@nozbe/watermelondb/Model';
import FoodItem from '@models/FoodItem';

class Serving extends Model {
  static table = 'servings';
  static associations: Associations = {
    food: { type: "belongs_to", key: 'food_id' },
    food_items: { type: "has_many", foreignKey: 'serving_id' },
  };

  @relation('food', 'food_id') food!: Food;
  @field('name') name!: string;
  @field('amount') amount!: number;
  @children('food_items') foodItems!: FoodItem[];
};

export type ServingData = {
  food: Food,
  name: string,
  amount: number,
};


export default Serving;