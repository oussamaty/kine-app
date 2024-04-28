import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FoodStackParamList } from '@navigation/types';
import MainFoodScreen from '@screens/food/MainFoodScreen';
import LogFoodScreen from '@screens/food/LogFoodScreen';
import MealFoodScreen from '@screens/food/MealFoodScreen';
import DetailsFoodScreen from '@screens/food/DetailsFoodScreen';
import CreateFoodScreen from '@screens/food/CreateFoodScreen';

const FoodStack = createNativeStackNavigator<FoodStackParamList>();

const FoodNavigation: React.FC = () => {
  return (
    <FoodStack.Navigator
      initialRouteName="MainFood"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <FoodStack.Screen name="MainFood" component={MainFoodScreen} />
      <FoodStack.Screen name="DailyMeal" component={MealFoodScreen} />
      <FoodStack.Screen name="LogFood" component={LogFoodScreen} />
      <FoodStack.Screen name="DetailsFood" component={DetailsFoodScreen} />
      <FoodStack.Screen name="CreateFood" component={CreateFoodScreen} />
    </FoodStack.Navigator>
  );
}

export default FoodNavigation;