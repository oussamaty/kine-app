import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from '@navigation/HomeNavigation';
import FoodNavigation from '@navigation/FoodNavigation';
import ActivityNavigation from '@navigation/ActivityNavigation';
import MealNavigation from '@navigation/MealNavigation';
import ProfileNavigation from '@navigation/ProfileNavigation';
import BottomBar from '@navigation/BottomBar';

const Bar = createBottomTabNavigator();

const AppNavigation: React.FC = () => {

    return (
        <Bar.Navigator
            initialRouteName="Home"
            tabBar={BottomBar}
            screenOptions={() => ({
                headerShown: false,
            })} >
            <Bar.Screen name="Home" component={HomeNavigation} />
            <Bar.Screen name="Food" component={FoodNavigation} />
            <Bar.Screen name="Activity" component={ActivityNavigation} />
            <Bar.Screen name="Profile" component={ProfileNavigation} />
        </Bar.Navigator>
    )
};

export default AppNavigation;