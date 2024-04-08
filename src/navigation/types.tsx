import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Welcome: undefined;
  Setup: undefined;
}

export type WelcomeScreenProp = NativeStackScreenProps<
  AuthStackParamList,
  'Welcome'
>;

export type SetupScreenProp = NativeStackScreenProps<
  AuthStackParamList,
  'Setup'
>;

export type AppStackParamList = {
  MainFood: undefined;
  ProfileOptions: undefined;
  EditProfile: undefined;
  AccountSettings: undefined;
  Settings: undefined;
  Activity: undefined;
  MealPlan: undefined;
  Home: undefined;
}

export type MainFoodScreenProp = NativeStackScreenProps<
  AppStackParamList,
  'MainFood'
>;

export type ProfileOptionsScreenProp = NativeStackScreenProps<
  AppStackParamList,
  'ProfileOptions'
>;

export type EditProfileScreenProp = NativeStackScreenProps<
  AppStackParamList,
  'EditProfile'
>;

export type AccountSettingsScreenProp = NativeStackScreenProps<
  AppStackParamList,
  'AccountSettings'
>;

export type SettingsScreenProp = NativeStackScreenProps<
  AppStackParamList,
  'Settings'
>;

export type MainActivityProp = NativeStackScreenProps<
  AppStackParamList,
  'Activity'
>;

export type MainMealProp = NativeStackScreenProps<
  AppStackParamList,
  'MealPlan'
>;

export type MainHomeProp = NativeStackScreenProps<
  AppStackParamList,
  'Home'
>;