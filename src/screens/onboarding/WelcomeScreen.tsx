import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreenProp } from '@navigation/types';
import KineLogo from '@assets/svg/kine_logo.svg';
import FixedScreen from '@components/FixedScreen';
import Button from '@components/Button';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreenProp } from '@navigation/types';
import KineLogo from '@assets/svg/kine_logo.svg';
import FixedScreen from '@components/FixedScreen';
import Button from '@components/Button';

const WelcomeScreen = ({ navigation }: WelcomeScreenProp) => {

    const getStarted = () => {
        navigation.navigate('Setup');
    };

    return (
        <FixedScreen style={styles.Screen}>
            <View style={styles.Layout}>
                <View style={styles.LogoWrapper}>
                    <KineLogo color="#000000" width="100%" height="100%" />
                </View>
                <View style={styles.Content}>
                    <Text style={styles.Title}>Welcome to Kine</Text>
                    <Text style={styles.WelcomeMessage}>
                        Discover a healthier, happier you. Kine is your personal guide to
                        wellness, offering a seamless way to track your nutrition and
                        fitness journey.
                    </Text>
                </View>
                <Button title="Get Started" onPress={getStarted} />
            </View>
        </FixedScreen>
    )
};

const styles = StyleSheet.create({
    Screen: {
        
    },

    Layout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        paddingTop: 150,
    },

    LogoWrapper: { 
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: 150,
        height: 150,
    },

    Content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 36,
        paddingBottom: 36,
    },

    Title: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "Roboto, sans-serif",
        fontWeight: "700",
        textAlign: "center",
    },

    WelcomeMessage: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        textAlign: "center",
    },
});

export default WelcomeScreen;