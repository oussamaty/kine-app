import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { MainFoodScreenProp } from '@navigation/types';
import CaloriesCard from '@screens/food/components/CaloriesCard';
import HelloUser from '@components/HelloUser';
import ScrollableScreen from '@components/ScrollableScreen';
import WeekDates from '@screens/food/components/WeekDates';
import DailyMealButton from '@screens/food/components/DailyMealButton';
import EggFried from '@assets/icons/egg-fried.svg';
import Turkey from '@assets/icons/turkey.svg';
import PotFood from '@assets/icons/pot-food.svg';
import Cookie from '@assets/icons/cookie-bite.svg';

const MainFoodScreen: React.FC<MainFoodScreenProp> = ({ navigation }) => {

    const meals = [
        {
            meal: "Breakfast",
            label: "Breakfast",
            time: "07:30",
            consumedCalories: 286,
            targetCalories: 420,
            icon: EggFried,
        },
        {
            meal: "Lunch",
            label: "Lunch",
            time: "12:00",
            consumedCalories: 355,
            targetCalories: 610,
            icon: Turkey,
        },
        {
            meal: "Dinner",
            label: "Dinner",
            time: "20:00",
            consumedCalories: 420,
            targetCalories: 532,
            icon: PotFood,
        },
        {
            meal: "Snack",
            label: "Snack",
            time: "18:00",
            consumedCalories: 113,
            targetCalories: 200,
            icon: Cookie,
        },
    ]

    const navigateToMeal = (meal: string) => {
        navigation.navigate("DailyMeal");
    }

    const addToMeal = (meal: string) => {
        navigation.navigate("LogFood");
    }

    return (
        <ScrollableScreen style={styles.Screen}>
            <HelloUser name='Oussama' />
            <CaloriesCard />
            <WeekDates />
            <View style={styles.Meals}>
                {
                    meals.map(({ meal, label, time, consumedCalories, targetCalories, icon }) => (
                        <DailyMealButton 
                            key={meal}
                            meal={meal}
                            time={time}
                            label={label}
                            consumedCalories={consumedCalories}
                            targetCalories={targetCalories}
                            icon={icon}
                            onIconPress={navigateToMeal}
                            onButtonPress={addToMeal} />
                    ))
                }
            </View>
        </ScrollableScreen>
    )
}

const styles = StyleSheet.create({
    Screen: {
        paddingTop: 50,
        gap: 16,
    },

    Meals: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 20,
    },

});

export default MainFoodScreen;