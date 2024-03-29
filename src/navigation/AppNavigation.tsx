import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigation/types';
import WelcomeScreen from '@screens/onboarding/WelcomeScreen';
import SignupScreen from '@screens/onboarding/SignupScreen';
import LoginScreen from '@screens/onboarding/LoginScreen';
import SetupScreen from '@screens/onboarding/SetupScreen';

const AppStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation: React.FC = () => {
    return (
        <AppStack.Navigator
          initialRouteName="welcome"
          screenOptions={() => ({
            headerShown: false,
          })}>
          <AppStack.Screen name="welcome" component={WelcomeScreen} />
          <AppStack.Screen name="signup" component={SignupScreen} />
          <AppStack.Screen name="login" component={LoginScreen} />
          <AppStack.Screen name="setup" component={SetupScreen} />
        </AppStack.Navigator>
      );
}

export default AppNavigation;