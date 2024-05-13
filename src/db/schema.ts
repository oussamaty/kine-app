import { appSchema, tableSchema } from '@nozbe/watermelondb';

const schema = appSchema({
    version: 1,
    tables: [
        tableSchema({
        name: 'days',
        columns: [
            { name: 'date', type: 'string', isIndexed: true },
            { name: 'total_calories', type: 'number' },
            { name: 'total_protein', type: 'number' },
            { name: 'total_carbs', type: 'number' },
            { name: 'total_fats', type: 'number' },
            { name: 'target_calories', type: 'number' },
            { name: 'target_protein', type: 'number' },
            { name: 'target_carbs', type: 'number' },
            { name: 'target_fats', type: 'number' },
        ],
        }),
        tableSchema({
        name: 'daily_meals',
        columns: [
            { name: 'day_id', type: 'string', isIndexed: true },
            { name: 'type', type: 'string' },
            { name: 'total_calories', type: 'number' },
            { name: 'total_protein', type: 'number' },
            { name: 'total_carbs', type: 'number' },
            { name: 'total_fats', type: 'number' },
            { name: 'target_calories', type: 'number' },
            { name: 'target_protein', type: 'number' },
            { name: 'target_carbs', type: 'number' },
            { name: 'target_fats', type: 'number' },
        ],
        }),
        tableSchema({
        name: 'food',
        columns: [
            { name: 'fid', type: 'number' },
            { name: 'name', type: 'string' },
            { name: 'calories', type: 'number' },
            { name: 'carbs', type: 'number' },
            { name: 'proteins', type: 'number' },
            { name: 'fat', type: 'number' },
        ],
        }),
        tableSchema({
        name: 'servings',
        columns: [
            { name: 'food_id', type: 'string', isIndexed: true },
            { name: 'name', type: 'string' },
            { name: 'amount', type: 'number' },
        ],
        }),
        tableSchema({
        name: 'food_items',
        columns: [
            { name: 'meal_id', type: 'string', isIndexed: true },
            { name: 'food_id', type: 'string' },
            { name: 'serving_id', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'calories', type: 'number' },
            { name: 'carbs', type: 'number' },
            { name: 'proteins', type: 'number' },
            { name: 'fat', type: 'number' },
        ],
        }),
    ],
});

export default schema;