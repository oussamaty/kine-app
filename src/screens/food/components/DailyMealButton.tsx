import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import Icon from '@components/Icon';
import PlusIcon from '@assets/icons/plus.svg';
import { Roboto } from '@theme/font';
import DailyMeal, { MealType } from '@models/DailyMeal';
import withObservables from '@nozbe/with-observables';

type DailyMealButtonProps = {
    daily_meals: DailyMeal,
    time: string;
    label: string;
    icon: React.FC<SvgProps>;
    onIconPress: (meal: string) => void;
    onButtonPress: (meal: string) => void;
    style?: ViewStyle;
};

const DailyMealButton: React.FC<DailyMealButtonProps> = ({ daily_meals, time, icon, onIconPress, onButtonPress, style }) => {

    return (
        <View style={[styles.Container, style]}>
            <TouchableOpacity style={styles.IconButton} onPress={() => onIconPress(daily_meals.type)}>
                <Icon Source={icon} fill='#211951' style={styles.Icon} />
            </TouchableOpacity>
            <View style={styles.Content}>
                <Text style={styles.Time}>{`🔔 ${time}`}</Text>
                <Text style={styles.Label}>{MealType[daily_meals.type]}</Text>
                <Text style={styles.Calories}>{`${daily_meals.totalCalories.toFixed(0)} Kcal out of ${daily_meals.targetCalories.toFixed(0)} Kcal`}</Text>
            </View>
            <TouchableOpacity style={styles.AddButton} onPress={() => onButtonPress(daily_meals.type)}>
                <Icon Source={PlusIcon} fill='#211951' style={styles.AddIcon}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderWidth: 1,
        borderColor: '#211951',
        borderRadius: 10,
        gap: 20,
    },

    IconButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },

    Icon: {
        width: 40,
        height: 40,
    },

    Content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 8,
    },

    Time: {
        fontFamily: Roboto.black,
        fontSize: 16,
        lineHeight: 16,
        fontWeight: '700',
        color: '#211951',
    },

    Label: {
        fontFamily: Roboto.black,
        fontSize: 22,
        lineHeight: 22,
        fontWeight: '800',
        color: '#211951',
    },

    Calories: {
        fontFamily: Roboto.black,
        fontSize: 16,
        lineHeight: 16,
        fontWeight: '400',
        color: '#211951',
    },

    AddButton: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#211951',
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    AddIcon: {
        width: 20,
        height: 20,
    },

});

const enhance = withObservables(['daily_meals'], ({ daily_meals }) => ({
    daily_meals
}));
  
const EnhancedDailyMealButton = enhance(DailyMealButton);

export default EnhancedDailyMealButton;