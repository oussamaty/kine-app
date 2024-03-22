import * as React from 'react';
import { useRef } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SignupScreenProp } from '@navigation/types';
import FixedScreen from 'src/components/FixedScreen';
import KineLogo from '@assets/svg/kine_logo.svg';
import GoogleLogo from '@assets/svg/Google_logo.svg';
import FacebookLogo from '@assets/svg/Facebook_logo.svg';
import Button from '@components/Button';
import { useAppDispatch } from 'src/hooks';
import { SIGNUP_REQUEST } from 'src/redux/types/authTypes';
import { signupUser } from 'src/redux/actions/authActions';

const SignupScreen = ({ navigation }: SignupScreenProp) => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);

    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        // Access values using refs
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const passwordConfirm = passwordConfirmRef.current.value;

        // Handle form submission


    };

    return (
        <FixedScreen style={styles.Screen}>
            <View style={styles.Layout}>

                <View style={styles.LogoWrapper}>
                    <KineLogo color="#000000" width="100%" height="100%" onPress={() => navigation.navigate('welcome')} />
                </View>

                <View style={styles.FormLayout}>
                    <View style={styles.InputLayout}>
                        <TextInput
                            ref={emailRef}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            placeholder="Email"
                            placeholderTextColor="#6b7280"
                            style={styles.Input}
                        />

                        <TextInput
                            autoCorrect={false}
                            ref={passwordRef}
                            placeholder="Password"
                            placeholderTextColor="#6b7280"
                            style={styles.Input}
                            secureTextEntry={true}
                        />

                        <TextInput
                            autoCorrect={false}
                            ref={passwordConfirmRef}
                            placeholder="Confirm password"
                            placeholderTextColor="#6b7280"
                            style={styles.Input}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.ButtonLayout}>
                        <Button style={styles.Button} title="Sign up" onPress={() => navigation.navigate('setup')} />
                        <View style={styles.NextText}>
                            <Text style={styles.Paragraph}> Already Have An Account ? </Text>
                            <Text style={styles.formLink} onPress={() => navigation.navigate('login')}> Log in </Text>
                        </View>

                    </View>
                    <View>
                        <Text>______________________________________</Text>
                    </View>
                    <View style={styles.SocialLayout}>
                        <View style={styles.SocialWrapper}>
                            <GoogleLogo color="#000000" width="100%" height="100%" />
                        </View>
                        <View style={styles.SocialWrapper}>
                            <FacebookLogo color="#000000" width="100%" height="100%" />
                        </View>

                    </View>


                </View>
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

    InputLayout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
        paddingTop: 30,
        gap: 20,
    },

    FormLayout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
        gap: 20,
    },

    LogoWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: 150,
        height: 150,
    },

    SocialWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: 70,
        height: 70,
    },

    Input: {
        height: 45,
        width: 300,

        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },

    Button: {
        height: 50
    },

    Paragraph: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "rgba(0,0,0,1)",
        fontSize: 14,
        lineHeight: 24,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        textAlign: "center",
    },

    ButtonLayout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: 15,
        gap: 2
    },

    formLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#075eec',


    },

    NextText: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingTop: 2,
        gap: 2
    },

    SocialLayout: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
        paddingTop: 30,
        gap: 50,
    }
})

export default SignupScreen;