import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { MainFoodScreenProp } from '@navigation/types';
import HelloUser from '@components/HelloUser';
import ScrollableScreen from '@components/ScrollableScreen';
import WeekDates from '@screens/food/components/WeekDates';
import EggFried from '@assets/icons/egg-fried.svg';
import Turkey from '@assets/icons/turkey.svg';
import PotFood from '@assets/icons/pot-food.svg';
import Cookie from '@assets/icons/cookie-bite.svg';
import DailyMeal, { MealTypeKey } from '@models/DailyMeal';
import EnhancedCaloriesCard from '@screens/food/components/CaloriesCard';
import { getOrCreateDay } from '@services/food';
import { Target } from '@services/food/types';
import { useAppSelector } from '@hooks/index';
import Day from '@models/Day';
import Toast from 'react-native-toast-message';
import { SvgProps } from 'react-native-svg';
import Loading from '@components/Loading';
import EnhancedDailyMealButton from '@screens/food/components/DailyMealButton';
import { elementMultMaps, multiplyMaps } from '@utils/index';
import { NutrientFactors } from '@config/food';
import { NutrientKey } from '@redux/types/userTypes';

const MainFoodScreen: React.FC<MainFoodScreenProp> = ({ navigation }) => {

    const userName = useAppSelector(state => state.user.firstName);

    const caloriesTarget = useAppSelector(state => state.user.calories) ?? 2000;
    const nutrientRatios = useAppSelector(state => state.user.nutrientRatios);
    const mealRatios = useAppSelector(state => state.user.mealRatios);

    const nutrientFactor = elementMultMaps(nutrientRatios, NutrientFactors) as Record<NutrientKey, number>;

    const target: Target = {
        calories: caloriesTarget,
        proteins: caloriesTarget * nutrientFactor.proteins,
        carbs: caloriesTarget * nutrientFactor.carbs,
        fat: caloriesTarget * nutrientFactor.fat,
    };

    const mealTargets =  multiplyMaps(mealRatios, target) as Record<MealTypeKey, Target> ;

    const [isLoading, setLoading] = useState<boolean>(true);
    const [dayRecord, setDayRecord] = useState<Day>();
    const [mealRecords, setMealRecords] = useState<DailyMeal[]>([]);
    const [currentDay, setCurrentDay] = useState<Date>(new Date());

    useEffect(() => {
        getOrCreateDay(currentDay, target, mealTargets)
            .then(([d, meals]) => {
                setDayRecord(d);
                setMealRecords(meals ?? []);
                setLoading(false);
            })
            .catch(e => {
                Toast.show({
                    type: 'error',
                    text1: 'Error Loading Data',
                });
                setLoading(false);
                console.log('Error:', e.message);
            });
    }, [currentDay]);

    const mealIcons: Record<MealTypeKey, { time: string, icon: React.FC<SvgProps> }> = {
        BREAKFAST: {
            time: "07:30",
            icon: EggFried,
        },

        LUNCH: {
            time: "12:00",
            icon: Turkey,
        },

        DINNER: {
            time: "20:00",
            icon: PotFood,
        },

        SNACK: {
            time: "18:00",
            icon: Cookie,
        },

    };

    const navigateToMeal = (mealRecord: DailyMeal) => {
        navigation.navigate("DailyMeal", { mealId: mealRecord.id });
    }

    const addToMeal = (mealRecord: DailyMeal) => {
        navigation.navigate("LogFood", { mealId: mealRecord.id });
    }

    return (
        <ScrollableScreen style={styles.Screen}>
            <HelloUser name={userName ?? 'User'} />
            { isLoading && <Loading /> }
            { !isLoading && <EnhancedCaloriesCard days={dayRecord} /> }
            { !isLoading && <WeekDates currentDay={currentDay} setCurrentDay={setCurrentDay} />}
            { !isLoading && 
                <View style={styles.Meals}>
                    {
                        mealRecords.map(mealRecord => (
                            <EnhancedDailyMealButton
                                key={mealRecord.type}
                                daily_meals={mealRecord}
                                time={mealIcons[mealRecord.type].time}
                                icon={mealIcons[mealRecord.type].icon}
                                onIconPress={() => navigateToMeal(mealRecord)}
                                onButtonPress={() => addToMeal(mealRecord)} />
                        ))
                    }
                </View>
            }
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