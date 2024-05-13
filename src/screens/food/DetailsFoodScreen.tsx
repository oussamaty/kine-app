import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ScreenHeader from '@components/ScreenHeader';
import ScrollableScreen from '@components/ScrollableScreen';
import { DetailsFoodScreenProp } from '@navigation/types';
import Button from '@components/Button';
import { Roboto } from '@theme/font';
import SelectInput from '@components/SelectInput';
import Food from '@models/Food';
import Serving from '@models/Serving';
import { getFoodWithServingsAndMeal, logFood } from '@services/food';
import Toast from 'react-native-toast-message';
import EnhancedFoodNutrientsInfo from '@screens/food/components/FoodNutrientsInfo';
import LabelInput from '@components/LabelInput';
import Loading from '@components/Loading';
import DailyMeal from '@models/DailyMeal';

const DetailsFoodScreen: React.FC<DetailsFoodScreenProp> = ({ route, navigation }) => {

    const mealId = route.params.mealId;
    const foodId = route.params.foodId;

    const [mealRecord, setMealRecord] = useState<DailyMeal>();
    const [foodRecord, setFoodRecord] = useState<Food>();
    const [servingRecords, setServingRecords] = useState<Serving[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    const servingRef = useRef<number>(0);
    const quantityRef = useRef<number>(1);

    useEffect(() => {
        getFoodWithServingsAndMeal(foodId, mealId)
            .then(([meal, food, servings]) => {
                setFoodRecord(food);
                setMealRecord(meal);
                if (!servings || servings.length === 0) {
                    throw new Error('Cannot load Serving records');
                }
                setServingRecords(servings ?? []);
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
    }, [foodId]);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const servingsToOptions = (servings: Serving[]) => {
        return servings.map((serving, index) => {
            return {
                key: index,
                label: serving.name,
                amout: serving.amount,
            }
        })
    };

    const handleLogFood = () => {
        setLoading(true);
        logFood(mealRecord!, foodRecord!, servingRecords[servingRef.current], quantityRef.current).then(foodItem => {
            setLoading(false);
            Toast.show({
                type: 'success',
                text1: 'Food Logged',
            });
            navigation.navigate('MainFood');
        }).catch(e => {
            Toast.show({
                type: 'error',
                text1: 'Error Logging Food',
            });
            setLoading(false);
            console.log('Error:', e.message);
        });
    };

    return (
        <ScrollableScreen style={styles.Container}>
            <ScreenHeader title={'Details'} onPress={handleBackPress} />
            <ImageBackground source={require('@assets/images/breakfast.jpg')} style={styles.Image} />
            { isLoading && <Loading /> }
            { !isLoading && <Text style={styles.Title}>{foodRecord?.name ?? ""}</Text> }
            { !isLoading &&
                <View style={styles.Servings}>
                    <LabelInput  valueRef={quantityRef} label='Qunt' type="numeric" maxValue={10} minValue={1} initialValue={1} isRequired={true} style={styles.Input} />
                    <SelectInput valueRef={servingRef}  style={styles.Select} label='Serving' initialOption={0} options={servingsToOptions(servingRecords)} />
                </View>
            }
            { !isLoading && <Button title='Add Food' onPress={handleLogFood} style={styles.Button} textStyle={styles.ButtonText}/> }
            { !isLoading && <EnhancedFoodNutrientsInfo title='Nutrional Info (100g)' food={foodRecord} style={styles.Nutrients} /> }
        </ScrollableScreen>
    )
};

const styles = StyleSheet.create({
    Container: {
        gap: 25,
    },

    Image: {
        width: '100%',
        height: 230,
        borderRadius: 25,
    },

    Title: {
        fontFamily: Roboto.black,
        fontSize: 28,
        lineHeight: 28,
        fontWeight: '900',
        color: '#000',
        width: '100%',
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

    Nutrients: {
        paddingHorizontal: 12,
    }
});

export default DetailsFoodScreen;