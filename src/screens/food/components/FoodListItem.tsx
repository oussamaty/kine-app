import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Food from '@models/Food';
import { SearchFoodResult } from '@services/food/types';
import { Roboto } from '@theme/font';

type FoodListItemProps = {
    item: SearchFoodResult | Food;
    onItemPress: ((selected: Food) => void) | ((selected: SearchFoodResult) => void);
};

const FoodListItem: React.FC<FoodListItemProps> = ({ item, onItemPress }) => {

    return (
        <TouchableOpacity style={styles.Item} onPress={() => onItemPress(item as (Food & SearchFoodResult))} >
            <Text style={styles.Name}>{item.name}</Text>
            <Text style={styles.Calories}>{`${item.calories.toFixed(0)} Kcal | ${100} g`}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    Item: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 10,
        gap: 5,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: "#211951"
    },

    Name: {
        fontFamily: Roboto.black,
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
    },

    Calories: {
        fontFamily: Roboto.black,
        fontSize: 18,
        fontWeight: '500',
        color: '#000',
    },
});

export default FoodListItem;