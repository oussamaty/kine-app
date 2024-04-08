import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@navigation/components/Icon';
import Food from '@assets/icons/food.svg';
import FoodFocused from '@assets/icons/food-focused.svg';
import ProfileFocused from '@assets/icons/profile-focused.svg';
import Profile from '@assets/icons/profile.svg';
import FoodScreen from '@screens/food/MainFoodScreen';
import AppNavigation from './AppNavigation';
import MainActivityScreen from '@screens/activity/MainAcitivityScreen';
import Activity from '@assets/icons/activity.svg'
import ActivityFocused from '@assets/icons/activity-focused.svg'
import MainMealScreen from '@screens/meal_plan/MainMealScreen';
import Meal from '@assets/icons/meal-plan.svg'
import MealFocused from '@assets/icons/meal-focused.svg'
import Home from '@assets/icons/home.svg'
import HomeFocused from '@assets/icons/home-focused.svg'
import MainHomeScreen from '@screens/home/MainHomeScreen';


const homeName = "Home";
const foodName = "Food";
const activityName = "Activity";
const mealName = "MealPlan";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

const MainContainer: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 70 },
                tabBarStyle: { backgroundColor: '#343A40', height: 70 },
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let iconImage;
                    let inUse;
                    switch (route.name) {
                        case foodName:
                            iconName = 'Food';
                            iconImage = focused ? FoodFocused : Food;
                            inUse = focused;
                            break;
                        case profileName:
                            iconName = 'Profile';
                            iconImage = focused ? ProfileFocused : Profile;
                            inUse = focused;
                            break;
                        case activityName:
                            iconName = 'Activity';
                            iconImage = focused ? ActivityFocused : Activity;
                            inUse = focused;
                            break;
                        case mealName:
                            iconName = 'Meal Plan';
                            iconImage = focused ? MealFocused : Meal;
                            inUse = focused;
                            break;
                        default:
                            iconName = 'Home';
                            iconImage = focused ? HomeFocused : Home;
                            inUse = focused;
                            break;
                    }
                    return <Icon Source={iconImage} title={iconName} inUse={inUse} target={route.name} />;
                },
                tabBarLabel: () => null,
                headerShown: false,
            })}>

            <Tab.Screen name={homeName} component={MainHomeScreen} />
            <Tab.Screen name={foodName} component={FoodScreen} />
            <Tab.Screen name={activityName} component={MainActivityScreen} />
            <Tab.Screen name={mealName} component={MainMealScreen} />
            <Tab.Screen name={profileName} component={AppNavigation} />
        </Tab.Navigator>
    );
}

export default MainContainer;