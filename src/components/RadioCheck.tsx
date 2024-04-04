import * as React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type RadioCheckProps = {
    active: boolean;
    style?: ViewStyle;
}

const RadioCheck: React.FC<RadioCheckProps> = ({ active, style }) => {

    return (
        <View style={[styles.RadioCheck, active ? styles.RadioCheckActive: styles.RadioCheckInActive, style]}>
        </View>
    )
}

const styles = StyleSheet.create({
    RadioCheck: {
        width: 25,
        height: 25,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 100,
    },

    RadioCheckInActive: {
        backgroundColor: '#ffffff',
    },

    RadioCheckActive: {
        backgroundColor: '#F7A072',
    }
});

export default RadioCheck;