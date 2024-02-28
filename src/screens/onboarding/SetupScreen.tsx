import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { SetupScreenProp } from '@navigation/types';

const SetupScreen = ({ navigation }:  SetupScreenProp) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Setup Screen</Text>
            <Button
                title="Welcome"
                onPress={() => navigation.navigate('welcome')}
            />
        </View>
    );
}

export default SetupScreen;