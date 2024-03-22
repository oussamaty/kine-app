import * as React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { LoginScreenProp } from 'src/navigation/types';
import { useRef } from 'react';
import Button from 'src/components/Button';
import FixedScreen from 'src/components/FixedScreen';
import KineLogo from '@assets/svg/kine_logo.svg';
import GoogleLogo from '@assets/svg/Google_logo.svg';
import FacebookLogo from '@assets/svg/Facebook_logo.svg';
import { loginUser } from 'src/redux/actions/authActions';
import { useAppDispatch, useAppSelector } from 'src/hooks';


const LoginScreen = ({ navigation }: LoginScreenProp) => {

    const email = useRef('');
    const password = useRef('');
    const dispash = useAppDispatch();
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
    const isLoading = useAppSelector(state => state.auth.isLoading);
    const errorAuth = useAppSelector(state => state.auth.errorAuth);



    const handleSubmit = () => {

        dispash(loginUser(email.current, password.current))


        if (isAuthenticated) {
            navigation.navigate('setup');
        }

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
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            placeholder="Email"
                            placeholderTextColor="#6b7280"
                            style={styles.Input}
                            onChangeText={e => email.current = e}
                            editable={!isLoading}
                        />

                        <TextInput
                            autoCorrect={false}
                            placeholder="Password"
                            placeholderTextColor="#6b7280"
                            style={styles.Input}
                            secureTextEntry={true}
                            onChangeText={e => password.current = e}
                            editable={!isLoading}
                        />



                    </View>

                    {errorAuth && <Text style={styles.ErrorText}>{errorAuth}</Text>}
                    <View style={styles.ButtonLayout}>
                        <Button style={styles.Button} title={isLoading ? 'Loading' : 'Log in'} onPress={handleSubmit} disabled={isLoading} />
                        <View style={styles.NextText}>
                            <Text style={styles.Paragraph}> Don't Have An Account ?  </Text>
                            <Text style={styles.formLink} onPress={() => navigation.navigate('signup')}> Sign up </Text>
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
        paddingTop: 30,
        gap: 20,
    },

    FormLayout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
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
        paddingTop: 30,
        gap: 50,
    },

    ErrorText: {
        color: 'red',
        fontSize: 14,
        fontWeight: '600',
    }
})

export default LoginScreen;