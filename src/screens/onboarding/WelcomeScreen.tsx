import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WelcomeScreenProp } from '@navigation/types';
import KineLogo from '@assets/svg/kine_logo_old.svg';
import FixedScreen from '@components/FixedScreen';
import Button from '@components/Button';
import { Roboto } from '@theme/font';
import { loginUser } from '@redux/actions/authActions';
import { useAppDispatch } from '@hooks/index';

const WelcomeScreen: React.FC<WelcomeScreenProp> = ({ navigation }) => {

    const dispatch = useAppDispatch();

    const getStarted = () => {
        navigation.navigate('Setup');
    };

    const handleLogin = () => {
        dispatch(loginUser());
    }

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
                <TouchableOpacity style={styles.LoginMessageWrapper} onPress={() => handleLogin()}>
                    <Text style={styles.LoginMessage}>Already have an account ?</Text>
                </TouchableOpacity>
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
        paddingTop: 180,
        gap: 40,
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
        paddingHorizontal: 30,
        gap: 20,
    },

    Title: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#000",
        fontSize: 24,
        fontFamily: Roboto.black,
        fontWeight: "700",
        textAlign: "center",
    },

    WelcomeMessage: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#000",
        fontSize: 16,
        lineHeight: 28,
        fontFamily: Roboto.medium,
        fontWeight: "500",
        textAlign: "center",
    },

    LoginMessageWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },

    LoginMessage: {
        color: "blue",
        fontSize: 18,
        lineHeight: 18,
        fontFamily: Roboto.medium,
        fontWeight: "500",
        textAlign: "center",
    },
});

export default WelcomeScreen;