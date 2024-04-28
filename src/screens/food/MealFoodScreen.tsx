import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ScreenHeader from '@components/ScreenHeader';
import ScrollableScreen from '@components/ScrollableScreen';
import { MealFoodScreenProp } from '@navigation/types';
import MealImageCard from '@screens/food/components/MealImageCard';
import Button from '@components/Button';
import LoggedFoodItem from '@screens/food/components/LoggedFoodItem';
import NutrientsInfo from '@screens/food/components/NutrientsInfo';

const MealFoodScreen: React.FC<MealFoodScreenProp> = ({ navigation }) => {

    const handleBackPress = () => {
        navigation.goBack();
    }

    const nutrients = [
        {
            label: 'Calories',
            consumed: 340,
            target: 420,
            unit: 'Kcal',
            color: '#49D49D',
        },
        {
            label: 'Protein',
            consumed: 16,
            target: 20,
            unit: 'g',
            color: '#F7A072',
        },
        {
            label: 'Carbs',
            consumed: 60,
            target: 75,
            unit: 'g',
            color: '#0FA3B1',
        },
        {
            label: 'Fats',
            consumed: 20,
            target: 30,
            unit: 'g',
            color: '#EDDEA4',
        },
    ];

    const addToMeal = (meal: string) => {
        navigation.navigate("LogFood");
    };

    const handleItemPress = (id: string) => {
        navigation.navigate("DetailsFood");
    }

    return (
        <ScrollableScreen style={styles.Container}>
            <ScreenHeader title={'Breakfast'} onPress={handleBackPress} />
            <MealImageCard image={require('@assets/images/breakfast.jpg')} meal='Breakfast' date='Thursday 15 Feb 2024' />
            <Button title='Add Food' onPress={() => addToMeal("Breakfast")} style={styles.Button}/>
            <View style={styles.Items}>
                <LoggedFoodItem id="Oatmeal" name="Oatmeal" calories={312} serving={100} unit='g' onItemPress={handleItemPress} onButtonPress={(id, add) => {}} />
                <LoggedFoodItem id="BoildEggs" name="Boiled Eggs" calories={240} serving={3} unit='Large' onItemPress={handleItemPress} onButtonPress={(id, add) => {}}/>
                <LoggedFoodItem id="Toast" name="Toast" calories={100} serving={2} unit='Servings' onItemPress={handleItemPress} onButtonPress={(id, add) => {}}/>
            </View>
            <NutrientsInfo title='Nutrients' nutrients={nutrients} style={styles.Nutrients} />
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

    Items: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 20,
        paddingHorizontal: 10,
    },

    Nutrients: {
        paddingHorizontal: 12,
    }

});

export default MealFoodScreen;