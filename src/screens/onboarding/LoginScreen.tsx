import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { LoginScreenProp } from '@navigation/types';

const LoginScreen = ({ navigation }: LoginScreenProp) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button
                title="Setup"
                onPress={() => navigation.navigate('setup')}
            />
        </View>
    );
}

export default LoginScreen;