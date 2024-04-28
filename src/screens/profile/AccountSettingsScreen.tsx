import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AccountSettingsScreenProp } from '@navigation/types';
import FixedScreen from '@components/FixedScreen';
import ScreenHeader from '@components/ScreenHeader';
import { Roboto } from '@theme/font';
import { useRef } from 'react';
import Button from '@components/Button';

const AccountSettingsScreen = ({ navigation }: AccountSettingsScreenProp) => {

    const nameRef = useRef(null);
    const phoneNumRef = useRef(null);

    return (
        <FixedScreen style={styles.Screen}>
            <ScreenHeader title={"Account"} onPress={() => navigation.navigate("ProfileOptions")} />
            <View style={styles.InfLyout}>
                <View style={styles.TextContainer}>
                    <Text style={styles.HeaderText}> Account Information </Text>
                </View>

                <View style={styles.FieldLayout}>
                    <Text style={styles.Text}>Email</Text>
                    <TextInput
                        ref={nameRef}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        placeholder="maleen.hawkins@gmail.com"
                        placeholderTextColor="#6b7280"
                        style={styles.Input}
                    />
                </View>
                <View style={styles.FieldLayout}>
                    <Text style={styles.Text}>Phone Number</Text>
                    <TextInput ref={phoneNumRef} autoCapitalize="none" autoCorrect={false}
                        keyboardType="numeric"
                        placeholder="Optional"
                        placeholderTextColor="#6b7280"
                        style={styles.Input}
                    />
                </View>
            </View>
            <View style={styles.InfLyout}>
                <View style={styles.TextContainer}>
                    <Text style={styles.HeaderText}> Security Settings </Text>
                </View>
                <Button title="CHANGE PASSWORD" />
            </View>
            <View style={styles.InfLyout}>
                <View style={styles.TextContainer}>
                    <Text style={styles.HeaderText}> Account Deletion </Text>
                </View>
                <Button style={styles.Button} title="DELETE ACCOUNT" />
            </View>
        </FixedScreen>
    )
};

const styles = StyleSheet.create({
    Screen: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        gap: 30,
    },

    InfLyout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        padding: 0,
        gap: 15,
        paddingTop: 16,
    },


    TextContainer: {
        width: "100%",
        paddingHorizontal: 20,
    },

    HeaderText: {
        fontSize: 28,
        fontFamily: Roboto.black,
        fontWeight: "800",
        textAlign: "left",
        color: '#000000',
    },

    FieldLayout: {
        display: "flex",
        gap: 4,
    },

    Input: {
        height: 45,
        width: 320,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },

    Text: {
        fontSize: 16,
        fontFamily: Roboto.black,
        fontWeight: "800",
        textAlign: "left",
        color: '#000000',
    },

    Button: {
        backgroundColor: "red",
    }

});

export default AccountSettingsScreen;