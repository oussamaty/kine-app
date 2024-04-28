import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ScreenHeader from '@components/ScreenHeader';
import ScrollableScreen from '@components/ScrollableScreen';
import { DetailsFoodScreenProp } from '@navigation/types';
import Button from '@components/Button';
import NutrientsInfo from '@screens/food/components/NutrientsInfo';
import { Roboto } from '@theme/font';
import Input from '@components/Input';
import SelectInput from '@components/SelectInput';

const DetailsFoodScreen: React.FC<DetailsFoodScreenProp> = ({ navigation }) => {

    const handleBackPress = () => {
        navigation.goBack();
    }

    const nutrients = [
        {
            label: 'Calories',
            consumed: 0,
            target: 420,
            unit: 'Kcal',
            color: '#49D49D',
        },
        {
            label: 'Protein',
            consumed: 0,
            target: 20,
            unit: 'g',
            color: '#F7A072',
        },
        {
            label: 'Carbs',
            consumed: 0,
            target: 75,
            unit: 'g',
            color: '#0FA3B1',
        },
        {
            label: 'Fats',
            consumed: 0,
            target: 30,
            unit: 'g',
            color: '#EDDEA4',
        },
    ];

    const logFood = () => {

    };

    return (
        <ScrollableScreen style={styles.Container}>
            <ScreenHeader title={'Details'} onPress={handleBackPress} />
            <ImageBackground source={require('@assets/images/breakfast.jpg')} style={styles.Image} />
            <Text style={styles.Title}>Boiled Egg</Text>
            <View style={styles.Servings}>
                <Input style={styles.Input} />
                <SelectInput style={styles.Select} label='Serving' options={[{ key: 'large', label: 'Large' }, { key: 'medium', label: 'Medium' }, { key: 'small', label: 'Small' },]} />
            </View>
            <NutrientsInfo title='Nutrients' nutrients={nutrients} />
            <Button title='Add Food' onPress={() => logFood()} style={styles.Button} textStyle={styles.ButtonText}/>
        </ScrollableScreen>
    )
};

const styles = StyleSheet.create({
    Container: {
        gap: 25,
    },

    Image: {
        width: '100%',
        height: 240,
        borderRadius: 25,
    },

    Title: {
        fontFamily: Roboto.black,
        fontSize: 28,
        lineHeight: 28,
        fontWeight: '900',
        color: '#000',
    },

    Servings: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },

    Input: {
        width: 70,
    },

    Select: {
        flex: 1,
    },

    Button: {
        width: '100%',
        height: 50,
        backgroundColor: '#15F5BA',
    },

    Items: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 20,
    },

    ButtonText: {
        color: '#211951',
    },
});

export default DetailsFoodScreen;