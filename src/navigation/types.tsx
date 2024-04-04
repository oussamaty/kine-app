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
}

export type MainFoodScreenProp = NativeStackScreenProps<
  AppStackParamList,
  'MainFood'
>;