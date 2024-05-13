import { NativeStackScreenProps } from '@react-navigation/native-stack';
import DailyMeal from '@models/DailyMeal';
import Food from '@models/Food';

export type AuthStackParamList = {
  Welcome: undefined;
  Setup: undefined;
};

export type WelcomeScreenProp = NativeStackScreenProps<
  AuthStackParamList,
  'Welcome'
>;

export type SetupScreenProp = NativeStackScreenProps<
  AuthStackParamList,
  'Setup'
>;

export type FoodStackParamList = {
  MainFood: undefined;
  DailyMeal: { mealId: string };
  LogFood: { mealId: string };
  DetailsFood: { mealId: string, foodId: string };
  CreateFood: { mealId: string };
};

export type MainFoodScreenProp = NativeStackScreenProps<
  FoodStackParamList,
  'MainFood'
>;

export type MealFoodScreenProp = NativeStackScreenProps<
  FoodStackParamList,
  'DailyMeal'
>;

export type LogFoodScreenProp = NativeStackScreenProps<
  FoodStackParamList,
  'LogFood'
>;

export type DetailsFoodScreenProp = NativeStackScreenProps<
  FoodStackParamList,
  'DetailsFood'
>;

export type CreateFoodScreenProp = NativeStackScreenProps<
  FoodStackParamList,
  'CreateFood'
>;

export type HomeStackParamList = {
  MainHome: undefined;
};

export type MainHomecreenProp = NativeStackScreenProps<
  HomeStackParamList,
  'MainHome'
>;

export type ActivityStackParamList = {
  MainActivity: undefined;
};

export type MainActivityScreenProp = NativeStackScreenProps<
ActivityStackParamList,
  'MainActivity'
>;

export type MealStackParamList = {
  MainMeal: undefined;
};

export type MainMealScreenProp = NativeStackScreenProps<
  MealStackParamList,
  'MainMeal'
>;

export type ProfileStackParamList = {
  ProfileOptions: undefined;
  EditProfile: undefined;
  AccountSettings: undefined;
  Settings: undefined;
};

export type ProfileOptionsScreenProp = NativeStackScreenProps<
  ProfileStackParamList,
  'ProfileOptions'
>;

export type EditProfileScreenProp = NativeStackScreenProps<
  ProfileStackParamList,
  'EditProfile'
>;

export type AccountSettingsScreenProp = NativeStackScreenProps<
  ProfileStackParamList,
  'AccountSettings'
>;

export type SettingsScreenProp = NativeStackScreenProps<
  ProfileStackParamList,
  'Settings'
>;