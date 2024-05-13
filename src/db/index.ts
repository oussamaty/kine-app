import { Platform } from 'react-native';
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from '@db/schema';
import migrations from '@db/migrations';
import DailyMeal from '@models/DailyMeal';
import Day from '@models/Day';
import FoodItem from '@models/FoodItem';
import Food from '@models/Food';
import Serving from '@models/Serving';

const adapter = new SQLiteAdapter({
    schema,
    //migrations,
    dbName: 'KineDB',
    jsi: Platform.OS === 'ios',
    onSetUpError: error => {

    }
})

const database = new Database({
    adapter,
    modelClasses: [
        Day,
        DailyMeal,
        Food,
        Serving,
        FoodItem,
    ],
});

export default database;