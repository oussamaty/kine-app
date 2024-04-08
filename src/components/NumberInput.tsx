import * as React from 'react';
import { MutableRefObject, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from '@components/Icon';
import ChevronUp from '@assets/icons/chevron-up.svg';
import ChevronDown from '@assets/icons/chevron-down.svg';

type NumberInputProps = {
    initialValue: number,
    style?: ViewStyle,
    unit?: string,
}

const NumberInput: React.FC<NumberInputProps> = ({ style, initialValue, unit }) => {

    const [count, setCount] = useState(initialValue)

    function handleChange(text: string) {
        const number = parseInt(text);
        if (!isNaN(number) && number >= 0) {
            setCount(number);
        } else {
            setCount(0);
        }
    }
    return (
        <View>
            <TextInput
                onChangeText={handleChange}
                value={count.toString()}
                keyboardType="numeric"
                placeholderTextColor="#6b7280"
                style={[styles.Input, style]}
            />
            <TouchableOpacity style={styles.ChevronUp} onPress={() => setCount(count + 1)} >
                <Icon style={styles.Icon} Source={ChevronUp} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ChevronDown} onPress={() => count !== 0 && setCount(count - 1)}>
                <Icon style={styles.Icon} Source={ChevronDown} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Input: {
        height: 45,
        width: 320,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },

    Icon: {
        width: 21,
        height: 21,
    },

    ChevronUp: {
        position: 'absolute',
        right: 15,
        zIndex: 1,
    },

    ChevronDown: {
        position: 'absolute',
        right: 15,
        bottom: 0,
        zIndex: 1,
    },
})

export default NumberInput;