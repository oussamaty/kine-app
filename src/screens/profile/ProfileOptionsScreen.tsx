import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProfileOptionsScreenProp } from '@navigation/types';
import ScreenHeader from '@components/ScreenHeader';
import NoProfilePicture from '@assets/icons/no_profile_picture.svg';
import { Roboto } from '@theme/font';
import OptionItem from '@screens/profile/components/OptionItem';
import user from '@assets/icons/user.svg'
import logout from '@assets/icons/logout.svg';
import target from '@assets/icons/target.svg';
import subscribe from '@assets/icons/subscribe.svg';
import padlock from '@assets/icons/padlock.svg';
import settings from '@assets/icons/settings.svg';
import FixedScreen from '@components/FixedScreen';

const ProfileOptionsScreen = ({ navigation }: ProfileOptionsScreenProp) => {
    return (
        <FixedScreen style={styles.Layout}>
            <ScreenHeader title={"Profile"} backButton={false} />
            <View style={styles.PictureWrapper}>
                <NoProfilePicture color="#000000" width="100%" height="100%" />
            </View>
            <Text style={styles.Name}>Maleen Hawkins</Text>
            <View style={styles.Options}>
                <OptionItem
                    title={"Edit Profile"}
                    icon={user}
                    onPress={() => { navigation.navigate('EditProfile'); }} />
                <OptionItem
                    title={"Set Goals"}
                    icon={target}
                />
                <OptionItem title={"Manage Subscriptions"} icon={subscribe} />
                <OptionItem title={"Settings"} icon={settings}
                    onPress={() => { navigation.navigate('Settings'); }} />
                <OptionItem
                    title={"Account"}
                    icon={padlock}
                    onPress={() => { navigation.navigate('AccountSettings'); }} />
                <OptionItem title={"Log Out"} icon={logout} />
            </View>
        </FixedScreen>
    );
}


const styles = StyleSheet.create({
    ButtomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },

    Layout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        padding: 0,
        gap: 30,
        paddingTop: 16,
    },

    Options: {

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        padding: 0,
        gap: 20,
    },

    PictureWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: 150,
        height: 150,
    },

    Name: {
        fontSize: 28,
        fontFamily: Roboto.black,
        fontWeight: "800",
        textAlign: "center",
        color: '#000000',
    },
});

export default ProfileOptionsScreen;