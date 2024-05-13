import * as React from 'react';
import { useState, useRef, useEffect, MutableRefObject } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ScreenHeader from '@components/ScreenHeader';
import ScrollableScreen from '@components/ScrollableScreen';
import { CreateFoodScreenProp } from '@navigation/types';
import Button from '@components/Button';
import { Roboto } from '@theme/font';
import LabelInput from '@components/LabelInput';
import EditableList from '@components/EditableList';
import Toast from 'react-native-toast-message';
import { createFoodWithServings } from '@services/food';
import { ServingData } from '@models/Serving';
import { FoodData } from '@models/Food';
import { getPreciseTime } from '@nozbe/watermelondb/utils/common';

const CreateFoodScreen: React.FC<CreateFoodScreenProp> = ({ navigation }) => {

    const [check, setCheck] = useState<boolean>(false);
    const [list, setList] = useState<{ name: string, value: number }[] | undefined>(undefined);

    const nameRef = useRef<string | undefined>();
    const caloriesRef = useRef<number | undefined>();
    const proteinsRef = useRef<number | undefined>();
    const carbsRef = useRef<number | undefined>();
    const fatRef = useRef<number | undefined>();

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleCreatePress = () => {
        setCheck(true);
    };

    const checkStringRef = (r: MutableRefObject<string | undefined>) => {
        return r.current !== undefined && r.current !== "";
    };

    const checkNumberRef = (r: MutableRefObject<number | undefined>) => {
        console.log(r.current);
        return r.current !== undefined;
    };

    const checkRefs = () => {
        return (
            checkStringRef(nameRef) && 
            checkNumberRef(caloriesRef) &&
            checkNumberRef(proteinsRef) &&
            checkNumberRef(carbsRef) &&
            checkNumberRef(fatRef)
        );
    }

    useEffect(() => {
        if (check) {
            setCheck(false);
            console.log(list, list?.length, checkRefs());
            if (list && list.length > 0 && checkRefs()) {
                const foodData: FoodData = {
                    foodId: getPreciseTime(),
                    name: nameRef.current!,
                    calories: caloriesRef.current!,
                    proteins: proteinsRef.current!,
                    carbs: carbsRef.current!,
                    fat: fatRef.current!,
                };

                const servingsData: Omit<ServingData,'food'>[] = list.map(item => {
                    return {
                        name: item.name,
                        amount: item.value
                    };
                });

                createFoodWithServings(foodData, servingsData)
                    .then(data => {
                        Toast.show({
                            type: 'success',
                            text1: 'Food Created Successfully'
                        });
                        navigation.goBack();
                    })
                    .catch(e => {
                        Toast.show({
                            type: 'error',
                            text1: 'Error Creating Food'
                        });
                    });
            }
            Toast.show({
                type: 'error',
                text1: 'Please Fill All the Fields'
            });
        }
    }, [list]);

    return (
        <ScrollableScreen style={styles.Container}>
            <ScreenHeader title={'Details'} onPress={handleBackPress} />
            <ImageBackground source={require('@assets/images/breakfast.jpg')} style={styles.Image} />
            <LabelInput label={"Name"} isRequired={true} valueRef={nameRef} />
            <View style={styles.Servings}>
                <Text style={styles.Title}>Servings</Text>
                <EditableList nameLabel='Serving' valueLabel='Weight (g)' check={check} setList={setList} initalValues={[{ name: '100g', value: 100 }]} />
            </View>
            <View style={styles.Inputs}>
                <Text style={styles.Title}>Nutritional Values</Text>
                <LabelInput valueRef={caloriesRef} style={styles.Input} label={"Calories"} type='numeric' minValue={0} unit='Kcal' isRequired={true} />
                <LabelInput valueRef={proteinsRef} style={styles.Input} label={"Proteins"} type='numeric' minValue={0} unit='g' isRequired={true} />
                <LabelInput valueRef={carbsRef} style={styles.Input} label={"Carbs"} type='numeric' minValue={0} unit='g' isRequired={true} />
                <LabelInput valueRef={fatRef} style={styles.Input} label={"Fat"} type='numeric' minValue={0} unit='g' isRequired={true} />
            </View>
            <Button title='Create Food' onPress={() => handleCreatePress()} style={styles.Button} textStyle={styles.ButtonText}/>
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
        fontSize: 24,
        lineHeight: 24,
        fontWeight: '900',
        color: '#000',
    },

    Servings: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 10,
    },

    Inputs: {
        paddingHorizontal: 10,
    },

    Button: {
        width: '100%',
        height: 50,
        backgroundColor: '#15F5BA',
    },

    ButtonText: {
        color: '#211951',
    },

    Items: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 20,
    },

    Input: {

    }

});

export default CreateFoodScreen;