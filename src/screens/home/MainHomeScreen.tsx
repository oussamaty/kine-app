import * as React from 'react';
import { useState, useEffect } from 'react';
import { MainHomecreenProp } from '@navigation/types';
import { useAppSelector } from '@hooks/index';
import HelloUser from '@components/HelloUser';
import Loading from '@components/Loading';
import { StyleSheet, View } from 'react-native';
import EnhancedCaloriesCard from '@screens/food/components/CaloriesCard';
import StepsCard from '@screens/activity/components/StepsCard';
import SleepCard from '@screens/activity/components/SleepCard';
import HeartCard from '@screens/activity/components/HeartCard';
import { getOrCreateDay } from '@services/food';
import { elementMultMaps, multiplyMaps } from '@utils/index';
import { NutrientFactors } from '@config/food';
import { NutrientKey } from '@redux/types/userTypes';
import { Target } from '@services/food/types';
import { MealTypeKey } from '@models/DailyMeal';
import Toast from 'react-native-toast-message';
import Day from '@models/Day';
import FixedScreen from '@components/FixedScreen';

const MainHomeScreen: React.FC<MainHomecreenProp> = ({ navigation }) => {
    const userName = useAppSelector(state => state.user.firstName);

    const [isLoading, setLoading] = useState<boolean>(true);
    const [dayRecord, setDayRecord] = useState<Day>();

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

    useEffect(() => {
        getOrCreateDay(new Date(), target, mealTargets)
            .then(([d, meals]) => {
                setDayRecord(d);
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
    }, []);

    return (
        <FixedScreen style={styles.Screen}>
            <HelloUser name={userName ?? 'User'} />
            { isLoading && <Loading /> }
            { !isLoading && 
                <View style={styles.Container}>
                    <EnhancedCaloriesCard days={dayRecord} style={styles.Calories} />
                    <View style={styles.Content}>
                        <View style={styles.Column}>
                            <StepsCard short={true} style={styles.Short}/>
                            <SleepCard short={true} style={styles.Short}/>
                        </View>
                        <View style={styles.Column}>
                            <HeartCard style={styles.Long}/>
                        </View>
                    </View>
                </View>
            }
        </FixedScreen>
    );
};

const styles = StyleSheet.create({
    Screen: {
        paddingTop: 50,
        gap: 16,
    },

    Container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        width: '100%',
        flex: 1,
    },

    Calories: {
        borderRadius: 25,
    },

    Content: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        width: '100%',
        flex: 1,
    },

    Column: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },

    Short: {
        flex: 1
    },

    Long: {
        flex: 1
    }
});

export default MainHomeScreen;