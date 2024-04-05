import * as React from 'react';
import MainFoodScreen from '@screens/food/MainFoodScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '@navigation/types';
import ProfileOptionsScreen from '@screens/profile/ProfileOptionsScreen';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <AppStack.Navigator
      initialRouteName="ProfileOptions"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <AppStack.Screen name="ProfileOptions" component={ProfileOptionsScreen} />
      <AppStack.Screen name="MainFood" component={MainFoodScreen} />

    </AppStack.Navigator>
  );
}

export default AppNavigation;