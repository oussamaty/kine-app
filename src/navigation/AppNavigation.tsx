import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '@navigation/types';
import ProfileOptionsScreen from '@screens/profile/ProfileOptionsScreen';
import EditProfileScreen from '@screens/profile/EditProfileScreen';
import AccountSettingsScreen from '@screens/profile/AccountSettingsScreen';
import SettingsScreen from '@screens/profile/SettingsScreen';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <AppStack.Navigator
      initialRouteName="ProfileOptions"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <AppStack.Screen name="ProfileOptions" component={ProfileOptionsScreen} />
      <AppStack.Screen name="EditProfile" component={EditProfileScreen} />
      <AppStack.Screen name="AccountSettings" component={AccountSettingsScreen} />
      <AppStack.Screen name="Settings" component={SettingsScreen} />
    </AppStack.Navigator>
  );
}

export default AppNavigation;