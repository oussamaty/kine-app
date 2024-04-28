import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '@navigation/types';
import MainHomeScreen from '@screens/home/MainHomeScreen';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigation: React.FC = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="MainHome"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <HomeStack.Screen name="MainHome" component={MainHomeScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigation;