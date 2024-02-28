import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

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
        height: 62,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 100,
        boxSizing: "border-box",
        backgroundColor: "rgba(15,163,177,1)",
    },
    ButtonText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "Roboto, sans-serif",
        fontWeight: "700",
        textAlign: "center",
    },
});

export default Button;