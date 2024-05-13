import { Model } from '@nozbe/watermelondb';
import { field, date, children } from '@nozbe/watermelondb/decorators';
import DailyMeal from '@models/DailyMeal';
import { Associations } from '@nozbe/watermelondb/Model';

class Day extends Model {
    static table = 'days';
    static associations: Associations = {
      daily_meals: { type: 'has_many', foreignKey: 'day_id' },
    };
  
    @field('date') date!: string;
    @field('total_calories') totalCalories!: number;
    @field('total_protein') totalProtein!: number;
    @field('total_carbs') totalCarbs!: number;
    @field('total_fats') totalFats!: number;
    @field('target_calories') targetCalories!: number;
    @field('target_protein') targetProtein!: number;
    @field('target_carbs') targetCarbs!: number;
    @field('target_fats') targetFats!: number;
    @children('daily_meals') meals!: DailyMeal[];
}

export type DayData = {
  date: string,
  totalCalories: number,
  totalProtein: number,
  totalCarbs: number,
  totalFats: number,
  targetCalories: number,
  targetProtein: number,
  targetCarbs: number,
  targetFats: number,
};

export default Day;