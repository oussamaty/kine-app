import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SettingsScreenProp } from '@navigation/types';
import ScreenHeader from '@components/ScreenHeader';
import { Roboto } from 'src/theme/font';
import SettingsItem from './components/SettingsItem';



const SettingsScreen = ({ navigation }: SettingsScreenProp) => {


    return (
        <View style={styles.Screen}>
            <ScreenHeader title={"Settings"} onPress={() => navigation.navigate("ProfileOptions")} />
            <View style={styles.Layout}>
                <View style={styles.TextContainer}>
                    <Text style={styles.HeaderText}> Measurements </Text>
                </View>
                <SettingsItem content='Weight Units' unit='Kg'></SettingsItem>
                <SettingsItem content='Height Units' unit='cm'></SettingsItem>
                <SettingsItem content='Liquid Units' unit='Liters'></SettingsItem>
                <SettingsItem content='Energey Units' unit='Kcal'></SettingsItem>
            </View>
            <View style={styles.Layout}>
                <View style={styles.TextContainer}>
                    <Text style={styles.HeaderText}> Data Synchronization </Text>
                </View>
                <SettingsItem content='Sync with Wearables'></SettingsItem>
                <SettingsItem content='Health App Integration'></SettingsItem>
                <SettingsItem content='Sync Frequency' unit='Everday'></SettingsItem>
            </View>
            <View style={styles.Layout}>
                <View style={styles.TextContainer}>
                    <Text style={styles.HeaderText}> Privacy Settings </Text>
                </View>
                <SettingsItem content='Data Sharing' unit='Private'></SettingsItem>
                <SettingsItem content='Social Media Connec...'></SettingsItem>
            </View>
            <View style={styles.Layout}>
                <View style={styles.TextContainer}>
                    <Text style={styles.HeaderText}> Notifications </Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    Screen: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        padding: 0,
        gap: 12,
        paddingTop: 16,
    },

    Layout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        padding: 0,
        gap: 0,
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

});

export default SettingsScreen;