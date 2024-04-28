import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ScreenHeader from '@components/ScreenHeader';
import ScrollableScreen from '@components/ScrollableScreen';
import { CreateFoodScreenProp } from '@navigation/types';
import Button from '@components/Button';
import { Roboto } from '@theme/font';
import LabelInput from '@components/LabelInput';
import EditableList from '@components/EditableList';

const CreateFoodScreen: React.FC<CreateFoodScreenProp> = ({ navigation }) => {

    const handleBackPress = () => {
        navigation.goBack();
    }

    const createFood = () => {

    }

    return (
        <ScrollableScreen style={styles.Container}>
            <ScreenHeader title={'Details'} onPress={handleBackPress} />
            <ImageBackground source={require('@assets/images/breakfast.jpg')} style={styles.Image} />
            <LabelInput label={"Name"} initialValue={"Boiled Egg"} />
            <View>
                <Text style={styles.Title}>Servings</Text>
                <EditableList />
            </View>
            <View>
                <Text style={styles.Title}>Nutritional Values</Text>
                <LabelInput style={styles.Input} label={"Calories"} type='numeric' initialValue={300} unit='Kcal' />
                <LabelInput style={styles.Input} label={"Protein"} type='numeric' initialValue={20} unit='g' />
                <LabelInput style={styles.Input} label={"Carbs"} type='numeric' initialValue={12} unit='g'/>
                <LabelInput style={styles.Input} label={"Fats"} type='numeric' initialValue={10} unit='g'/>
            </View>
            <Button title='Create Food' onPress={() => createFood()} style={styles.Button} textStyle={styles.ButtonText}/>
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
        fontSize: 24,
        lineHeight: 24,
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