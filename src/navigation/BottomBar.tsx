import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@navigation/components/Icon';
import Home from '@assets/icons/home.svg';
import Food from '@assets/icons/food.svg';
import Activity from '@assets/icons/activity.svg';
import MealPlan from '@assets/icons/meal-plan.svg';
import Profile from '@assets/icons/profile.svg';

// Screens
import ProfileScreen from '@screens/profile/ProfileOptionsScreen';
import FoodScreen from '@screens/food/MainFoodScreen';
//Screen names
const profileName = "Profile";
const foodName = "Food";

const Tab = createBottomTabNavigator();


function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={profileName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        let rn = route.name;
                        let iconImage;

                        if (rn === profileName) {
                            iconName = focused ? 'Profile' : 'Profile-outline';
                            iconImage = Food

                        } else {
                            iconName = focused ? 'Food' : 'Food-outline';
                            iconImage = Profile;
                        };
                        // You can return any component that you like here!
                        return <Icon Source={iconImage} title={iconName} />;
                    },
                })}

                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 },
                    tabBarStyle: { backgroundColor: 'black' }
                }}>

                <Tab.Screen name={profileName} component={ProfileScreen} />
                <Tab.Screen name={foodName} component={FoodScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;