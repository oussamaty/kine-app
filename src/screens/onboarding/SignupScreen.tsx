import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { SignupScreenProp } from '@navigation/types';

const SignupScreen = ({ navigation }:  SignupScreenProp) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Signup Screen</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('login')}
            />
        </View>
    );
}

export default SignupScreen;
