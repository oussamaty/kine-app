import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    welcome: undefined;
    signup: undefined;
    login: undefined;
    onboarding: undefined;
}

export type WelcomeScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'welcome'
>;

export type WelcomeScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'signup'
>;

export type WelcomeScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'login'
>;

export type WelcomeScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'onboarding'
>;