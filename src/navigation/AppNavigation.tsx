import * as React from 'react';
import MainFoodScreen from '@screens/food/MainFoodScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '@navigation/types';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <AppStack.Navigator
      initialRouteName="MainFood"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <AppStack.Screen name="MainFood" component={MainFoodScreen} />
    </AppStack.Navigator>
  );
}

export default AppNavigation;