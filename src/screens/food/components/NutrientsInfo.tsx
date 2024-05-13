import * as React from 'react';
import { ColorValue, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Roboto } from '@theme/font';
import DailyMeal from '@models/DailyMeal';
import NutrientsInfoItem from '@screens/food/components/NutrientsInfoItem';
import withObservables from '@nozbe/with-observables';

type NutrientsInfoProps = {
    title: string;
    daily_meals: DailyMeal | undefined;
    style?: ViewStyle;
};

export const NutrientsInfo: React.FC<NutrientsInfoProps> = ({ title, daily_meals, style }) => {

    return (
        <View style={[styles.Container, style]}>
            <Text style={styles.Title}>{title}</Text>
            <View style={styles.Nutrients}>
                <NutrientsInfoItem key={0} label="Calories" consumed={daily_meals?.totalCalories ?? 0} target={daily_meals?.targetCalories ?? 2000} unit="Kcal" color="#49D49D" />
                <NutrientsInfoItem key={1} label="Protein" consumed={daily_meals?.totalProtein ?? 0} target={daily_meals?.targetProtein ?? 100} unit="g" color="#F7A072" />
                <NutrientsInfoItem key={2} label="Carbs" consumed={daily_meals?.totalCarbs ?? 0} target={daily_meals?.targetCarbs ?? 100} unit="g" color="#0FA3B1" />
                <NutrientsInfoItem key={3} label="Fats" consumed={daily_meals?.totalFats ?? 0} target={daily_meals?.targetFats ?? 100} unit="g" color="#EDDEA4" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
    },

    Title: {
        fontFamily: Roboto.black,
        fontSize: 28,
        lineHeight: 28,
        fontWeight: '900',
        color: '#000',
    },

    Nutrients: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
    },

});

const enhance = withObservables(['daily_meals'], ({ daily_meals }) => ({
    daily_meals
}));
  
const EnhancedNutrientInfo = enhance(NutrientsInfo);

export default EnhancedNutrientInfo;