import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealStackParamList } from '@navigation/types';
import MainMealScreen from '@screens/meal/MainMealScreen';

const MealStack = createNativeStackNavigator<MealStackParamList>();

const MealNavigation: React.FC = () => {
  return (
    <MealStack.Navigator
      initialRouteName="MainMeal"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <MealStack.Screen name="MainMeal" component={MainMealScreen} />
    </MealStack.Navigator>
  );
}

export default MealNavigation;