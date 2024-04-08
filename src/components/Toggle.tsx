import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Switch, View, ViewStyle } from 'react-native';

type ToggleProps = {
    style?: ViewStyle;
}

const Toggle: React.FC<ToggleProps> = ({ style }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={[styles.container, style]}>
            <Switch
                trackColor={{ false: '#ADB5BD', true: '#0FA3B1' }}
                thumbColor={'#f4f3f4'}
                onValueChange={toggleSwitch}
                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                value={isEnabled}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderWidth: 1,
    },
})

export default Toggle;