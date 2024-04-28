import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '@navigation/types';
import ProfileOptionsScreen from '@screens/profile/ProfileOptionsScreen';
import AccountSettingsScreen from '@screens/profile/AccountSettingsScreen';
import SettingsScreen from '@screens/profile/SettingsScreen';
import EditProfileScreen from '@screens/profile/EditProfileScreen';

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileNavigation: React.FC = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="ProfileOptions"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <ProfileStack.Screen name="ProfileOptions" component={ProfileOptionsScreen} />
      <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} />
      <ProfileStack.Screen name="AccountSettings" component={AccountSettingsScreen} />
      <ProfileStack.Screen name="Settings" component={SettingsScreen} />
    </ProfileStack.Navigator>
  );
}

export default ProfileNavigation;