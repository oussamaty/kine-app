import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProfileOptionsScreenProp } from '@navigation/types';
import ScreenHeader from '@components/ScreenHeader';
import { Roboto } from '@theme/font';
import OptionItem from '@screens/profile/components/OptionItem';
import UserIcon from '@assets/icons/user.svg'
import LogoutIcon from '@assets/icons/logout.svg';
import TargetIcon from '@assets/icons/target.svg';
import SubscribeIcon from '@assets/icons/subscribe.svg';
import PadlockIcon from '@assets/icons/padlock.svg';
import SettingsIcon from '@assets/icons/settings.svg';
import FixedScreen from '@components/FixedScreen';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import ProfileImage from '@screens/profile/components/ProfileImage';
import { logoutUser } from '@redux/actions/authActions';
import { persistor } from '@redux/store';

const ProfileOptionsScreen = ({ navigation }: ProfileOptionsScreenProp) => {

    const Name = useAppSelector(state => state.user.firstName) + " " + useAppSelector(state => state.user.lastName);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    }

    return (
        <FixedScreen style={styles.Layout}>
            <ScreenHeader title={"Profile"} backButton={false} />
            <ProfileImage style={styles.PictureWrapper} />
            <Text style={styles.Name}>{Name}</Text>
            <View style={styles.Options}>
                <OptionItem
                    title={"Edit Profile"}
                    IconSrc={UserIcon}
                    onPress={() => { navigation.navigate('EditProfile'); }} />
                <OptionItem
                    title={"Set Goals"}
                    IconSrc={TargetIcon} />
                <OptionItem title={"Manage Subscriptions"} IconSrc={SubscribeIcon} />
                <OptionItem title={"Settings"} IconSrc={SettingsIcon}
                    onPress={() => { navigation.navigate('Settings'); }} />
                <OptionItem
                    title={"Account"}
                    IconSrc={PadlockIcon} />
                <OptionItem
                    title={"Log Out"}
                    IconSrc={LogoutIcon}
                    onPress={() => { handleLogout() }} />
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