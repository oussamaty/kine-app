import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { WelcomeScreenProp } from 'src/navigation/types';

const WelcomeScreen = ({ navigation }: WelcomeScreenProp) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome Screen</Text>
            <Button
                title="Signup"
                onPress={() => navigation.navigate('signup')}
            />
        </View>
    );
}

export default WelcomeScreen;