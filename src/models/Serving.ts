import { Model } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';
import Food from '@models/Food';
import { Associations } from '@nozbe/watermelondb/Model';

class Serving extends Model {
  static table = 'servings';
  static associations: Associations = {
    food: { type: 'belongs_to', key: 'food_id' },
  };

  @relation('food', 'food_id') food!: Food;
  @field('name') name!: string;
  @field('amount') amount!: number;
};

export type ServingData = {
  food: Food,
  name: string,
  amount: number,
};


export default Serving;