import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  welcome: undefined;
  signup: undefined;
  login: undefined;
  setup: undefined;
}

export type WelcomeScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'welcome'

>;

export type LoginScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'login'
>;

export type SignupScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'signup'
>;

export type SetupScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'setup'
>;

