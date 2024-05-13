import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import ScreenHeader from '@components/ScreenHeader';
import ScrollableScreen from '@components/ScrollableScreen';
import { MealFoodScreenProp } from '@navigation/types';
import MealImageCard from '@screens/food/components/MealImageCard';
import Button from '@components/Button';
import DailyMeal, { MealType } from '@models/DailyMeal';
import { getMeal, unlogFood } from '@services/food';
import Day from '@models/Day';
import Toast from 'react-native-toast-message';
import Loading from '@components/Loading';
import EnhancedNutrientInfo from '@screens/food/components/NutrientsInfo';
import FoodItem from '@models/FoodItem';
import EnhancedMealFoodList from '@screens/food/components/MealFoodList';


const MealFoodScreen: React.FC<MealFoodScreenProp> = ({ route, navigation }) => {

    const mealId = route.params.mealId;

    const [isLoading, setLoading] = useState<boolean>(true);
    const [mealRecord, setMealRecord] = useState<DailyMeal>();
    const [dayRecord, setDayRecord] = useState<Day>();

    useEffect(() => {
        getMeal(mealId)
            .then(([meal, day]) => {
                setDayRecord(day);
                setMealRecord(meal);
                setLoading(false);
            })
            .catch(e => {
                Toast.show({
                    type: 'error',
                    text1: 'Error Loading Data',
                });
                navigation.goBack();
                setLoading(false);
                console.log('Error:', e.message);
            });
    }, [mealId]);

    const handleBackPress = () => {
        navigation.goBack();
    }

    const addToMeal = (mealId: string) => {
        navigation.navigate("LogFood", {
            mealId: mealId
        });
    };

    const handleItemPress = (foodId: string) => {
        navigation.navigate("DetailsFood", {
            mealId: mealId,
            foodId: foodId
        });
    };

    const handleDeletePress  = (foodItem: FoodItem) => {
        unlogFood(mealRecord!, foodItem)
            .then(meal => {
                console.log(meal._raw);
            })
            .catch(e => {
                Toast.show({
                    type: 'error',
                    text1: 'Error Unlogging Food',
                });
                console.log('Error:', e.message);
            })
    }

    const dateParse = (d: string) => {
        const newDate = new Date(d);
        return newDate.toDateString();
    };

    return (
        <ScrollableScreen style={styles.Container}>
            <ScreenHeader title={MealType[mealRecord?.type ?? 'BREAKFAST']} onPress={handleBackPress} />
            <MealImageCard image={require('@assets/images/breakfast.jpg')} meal={MealType[mealRecord?.type ?? 'BREAKFAST']} date={dateParse(dayRecord?.date ?? "")} />
            <Button title='Log Food' onPress={() => addToMeal(mealId)} style={styles.Button}/>
            { isLoading && <Loading /> }
            { !isLoading && 
                <EnhancedMealFoodList daily_meals={mealRecord} handleItemPress={handleItemPress} handleDeletePress={handleDeletePress} />
            }
            { !isLoading &&
                <EnhancedNutrientInfo title='Nutrients' daily_meals={mealRecord} style={styles.Nutrients} />
            }
        </ScrollableScreen>
    )
};

const styles = StyleSheet.create({
    Container: {
        gap: 25,
    },

    Button: {
        width: '100%',
        height: 50,
        backgroundColor: '#F7A072',
    },

    Nutrients: {
        paddingHorizontal: 12,
    }

});

export default MealFoodScreen;