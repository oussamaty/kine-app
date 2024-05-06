import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import NoProfilePicture from '@assets/icons/no_profile_picture.svg';
import { useAppSelector } from '@hooks/index';

const ProfileImage = ({ style = {} }) => {

    const profilePic = useAppSelector((state) => state.user.profilePicture);


    return (
        <View style={[styles.container, style]}>
            {profilePic === null ? (
                <NoProfilePicture color="#000000" width="100%" height="100%" />
            ) : (
                <Image source={profilePic} style={styles.profilePic} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePic: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
});

export default ProfileImage;