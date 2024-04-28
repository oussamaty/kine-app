import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityStackParamList } from '@navigation/types';
import MainActivityScreen from '@screens/activity/MainAcitivityScreen';

const ActivityStack = createNativeStackNavigator<ActivityStackParamList>();

const ActivityNavigation: React.FC = () => {
  return (
    <ActivityStack.Navigator
      initialRouteName="MainActivity"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <ActivityStack.Screen name="MainActivity" component={MainActivityScreen} />
    </ActivityStack.Navigator>
  );
}

export default ActivityNavigation;