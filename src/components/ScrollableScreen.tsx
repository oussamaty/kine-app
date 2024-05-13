import * as React from 'react';
import { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, ScrollView, SafeAreaView } from 'react-native';

type ScrollableScreenProps = {
    children: ReactNode;
    style?: ViewStyle;
}

const ScrollableScreen: React.FC<ScrollableScreenProps> = ({ children, style }) => {
    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView contentContainerStyle={[styles.Screen, style]}>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },

    Screen: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 30,
        backgroundColor: "#ffffff",
    }
});

export default ScrollableScreen;