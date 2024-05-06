import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoProfilePicture from '@assets/icons/no_profile_picture.svg';

const ProfileImage = ({ style = {} }) => {
    const [profilePic, setProfilePic] = useState(null);

    useEffect(() => {
        const loadProfilePic = async () => {
            try {
                const storedPic = await AsyncStorage.getItem('profilePic');
                if (storedPic) {
                    const parsedPic = JSON.parse(storedPic);
                    setProfilePic(parsedPic);
                }
            } catch (error) {
                console.error('Error loading profile pic:', error);
            }
        };

        loadProfilePic();
    }, []);


    return (
        <View style={[styles.container, style]}>
            {profilePic ? (
                <Image source={profilePic} style={styles.profilePic} />
            ) : (
                <NoProfilePicture color="#000000" width="100%" height="100%" />
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