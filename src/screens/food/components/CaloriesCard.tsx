import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import NutrientProgress from '@screens/food/components/NutrientProgress';
import CaloriesBar from '@screens/food/components/CaloriesBar';
import { Roboto } from '@theme/font';
import Day from '@models/Day';
import withObservables from '@nozbe/with-observables';

type CaloriesCardProps = {
    days: Day | undefined;
    style?: ViewStyle;
};

const CaloriesCard: React.FC<CaloriesCardProps> = ({ days, style }) => {

    return  !days ? <></> : (
        <View style={[styles.Container, style]}>
            <View style={styles.Calories}>
                <View style={styles.SideText}>
                    <Text style={styles.SideLabel}>🍎 Left</Text>
                    <Text style={styles.SideAmount}>{Math.max(0, days.targetCalories - days.totalCalories).toFixed(0)} Kcal</Text>
                </View>
                <CaloriesBar calories={days.totalCalories} progress={100 * Math.min(1, days.totalCalories / days.targetCalories)} />
                <View style={styles.SideText}>
                    <Text style={styles.SideLabel}>🔥 Burned</Text>
                    <Text style={styles.SideAmount}>572 Kcal</Text>
                </View>
            </View>
            <View style={styles.Nutrients}>
                <NutrientProgress 
                    label='Protein'
                    progress={100 * Math.min(1, days.totalProtein / days.targetProtein)}
                    amount={days.totalProtein}
                    unit='mg' />
                <NutrientProgress 
                    label='Carbs'
                    progress={100 * Math.min(1, days.totalCarbs / days.targetCarbs)}
                    amount={days.totalCarbs}
                    unit='mg' />
                <NutrientProgress 
                    label='Fat'
                    progress={100 * Math.min(1, days.totalFats / days.targetFats)}
                    amount={days.totalFats}
                    unit='mg' />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderWidth: 1,
        borderColor: '#211951',
        borderRadius: 10,
        padding: 20,
    },

    Calories: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: 20,
    },

    Nutrients: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: 20,
    },

    SideText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    SideLabel: {
        color: '#211951',
        fontFamily: Roboto.black,
        fontWeight: '600',
        fontSize: 16,
    },

    SideAmount: {
        color: '#211951',
        fontFamily: Roboto.black,
        fontWeight: '800',
        fontSize: 16,
    },

});

const enhance = withObservables(['days'], ({ days }) => ({
    days
}));
  
const EnhancedCaloriesCard = enhance(CaloriesCard);

export default EnhancedCaloriesCard;