import * as React from 'react';
import { ColorValue, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Roboto } from '@theme/font';
import NutrientsInfoItem from '@screens/food/components/NutrientsInfoItem';
import withObservables from '@nozbe/with-observables';
import Food from '@models/Food';

type FoodNutrientsInfoProps = {
    title: string;
    food: Food | undefined;
    style?: ViewStyle;
};

export const FoodNutrientsInfo: React.FC<FoodNutrientsInfoProps> = ({ title, food, style }) => {

    return (
        <View style={[styles.Container, style]}>
            <Text style={styles.Title}>{title}</Text>
            <View style={styles.Nutrients}>
                <NutrientsInfoItem key={0} label="Calories" target={food?.calories ?? 2000} unit="Kcal" color="#49D49D" />
                <NutrientsInfoItem key={1} label="Proteins" target={food?.proteins ?? 100} unit="g" color="#F7A072" />
                <NutrientsInfoItem key={2} label="Carbs" target={food?.carbs ?? 100} unit="g" color="#0FA3B1" />
                <NutrientsInfoItem key={3} label="Fats" target={food?.fat ?? 100} unit="g" color="#EDDEA4" />
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

const enhance = withObservables(['food'], ({ food }) => ({
    food
}));
  
const EnhancedFoodNutrientInfo = enhance(FoodNutrientsInfo);

export default EnhancedFoodNutrientInfo;