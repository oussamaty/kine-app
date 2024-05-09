import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, GestureResponderEvent, TextStyle } from 'react-native';
import { Roboto } from '@theme/font';

interface ButtonProps {
    title: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    onPress?: (event: GestureResponderEvent) => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onPress, title, style, textStyle, disabled }) => {
    // Choose background color based on disabled state
    const buttonBackgroundColor = disabled ? styles.DisabledButton.backgroundColor : styles.Button.backgroundColor;

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[styles.Button, { backgroundColor: buttonBackgroundColor }, style]} // Override background color conditionally
        >
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
        backgroundColor: "#211951", // Default color for enabled button
    },

    DisabledButton: {
        backgroundColor: "#9E9E9E", // Color for disabled button
    },

    ButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontFamily: Roboto.black,
        fontWeight: "900",
        textAlign: "center",
        textTransform: 'uppercase',
    },
});

export default Button;
