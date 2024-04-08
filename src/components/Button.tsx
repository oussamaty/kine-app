import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, GestureResponderEvent } from 'react-native';
import { Roboto } from '@theme/font';

interface ButtonProps {
    title: string,
    style?: ViewStyle;
    textStyle?: ViewStyle,
    onPress?: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ onPress, title, style, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.Button, style]}>
            <Text style={[styles.ButtonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Button: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 50,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 100,
        backgroundColor: "#211951",
    },

    ButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontFamily: Roboto.black,
        fontWeight: "700",
        textAlign: "center",
        textTransform: 'uppercase',
    },
});

export default Button;