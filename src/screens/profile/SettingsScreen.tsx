import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { SettingsScreenProp } from '@navigation/types';
import Icon from '@screens/profile/components/Icon';
import Home from '@assets/icons/home.svg';
import Food from '@assets/icons/food.svg';
import Activity from '@assets/icons/activity.svg';
import MealPlan from '@assets/icons/meal-plan.svg';
import Profile from '@assets/icons/profile.svg';


const SettingsScreen = ({ navigation }: SettingsScreenProp) => {


    return (
        <View style={styles.IconWrapper}>
            <Icon Source={Home} title="Home" ></Icon>
            <Icon Source={Food} title="Food"></Icon>
            <Icon Source={Activity} title="Activity" ></Icon>
            <Icon Source={MealPlan} title="Meal Plan" ></Icon>
            <Icon Source={Profile} title="Profile"></Icon>
        </View>
    )
};

const styles = StyleSheet.create({


    IconWrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '10%',
        backgroundColor: '#343A40',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
    }


});

export default SettingsScreen;