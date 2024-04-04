import * as React from 'react';
import WelcomeScreen from '@screens/onboarding/WelcomeScreen';
import SetupScreen from '@screens/onboarding/SetupScreen';
import { AuthStackParamList } from '@navigation/types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation: React.FC = () => {

    return (
        <AuthStack.Navigator
            initialRouteName="Welcome"
            screenOptions={() => ({
              headerShown: false,
            })}>
            <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
            <AuthStack.Screen name="Setup" component={SetupScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation;