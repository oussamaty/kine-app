import * as React from 'react';
import { useState, useEffect } from 'react';
import withObservables from "@nozbe/with-observables";
import { StyleSheet, View } from "react-native";
import Empty from "@components/Empty";
import FoodItem from "@models/FoodItem";
import LoggedFoodItem from "@screens/food/components/LoggedFoodItem";
import { FullFoodItem } from '@services/food/types';
import { getFoodItemsFromMeal } from 'src/services/food';
import DailyMeal from 'src/models/DailyMeal';

type MealFoodListProps = {
    daily_meals: DailyMeal;
    handleItemPress: (foodId: string) => void;
    handleDeletePress: (foodItem: FoodItem) => void;
};

const MealFoodList: React.FC<MealFoodListProps> = ({ daily_meals, handleItemPress, handleDeletePress }) => {

    
    const [fullFoodItems, setFullFoodItems] = useState<FullFoodItem[]>([]);

    useEffect(() => {
        getFoodItemsFromMeal(daily_meals)
            .then(foodItems => {
                setFullFoodItems(foodItems);
            })
            .catch(e =>{
                setFullFoodItems([]);
                console.log('Error:', e.message);
            });
    });

    return (
        <View style={styles.Items}>
            {   
                fullFoodItems.length == 0 ?
                    <Empty message='You still have not logged any meal today' /> :
                    fullFoodItems.map(fullFoodItem => (
                        <LoggedFoodItem
                            id={fullFoodItem.foodItem.id}
                            key={fullFoodItem.foodItem.id}
                            name={fullFoodItem.food.name}
                            calories={fullFoodItem.foodItem.calories}
                            serving={fullFoodItem.foodItem.quantity}
                            unit={fullFoodItem.serving.name}
                            onItemPress={() => handleItemPress(fullFoodItem.food.id)}
                            onButtonPress={() => handleDeletePress(fullFoodItem.foodItem)} />
                    ))
            }
        </View>
    )
};

const styles = StyleSheet.create({
    Items: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 20,
        paddingHorizontal: 10,
    },
});

const enhance = withObservables(['daily_meals'], ({ daily_meals }) => ({
    daily_meals
}));
  
const EnhancedMealFoodList = enhance(MealFoodList);

export default EnhancedMealFoodList;