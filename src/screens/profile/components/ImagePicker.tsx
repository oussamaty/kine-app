import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoProfilePicture from '@assets/icons/no_profile_picture.svg';

const ImagePicker = ({ style = {} }) => {
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

    const selectProfilePic = () => {
        const options = {
            mediaType: 'photo',
        };

        launchImageLibrary(options, async (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.error('ImagePicker Error:', response.errorMessage);
            } else if (response.assets) {
                const selectedImage = { uri: response.assets[0].uri };

                try {
                    await AsyncStorage.setItem('profilePic', JSON.stringify(selectedImage));
                    setProfilePic(selectedImage);
                } catch (error) {
                    console.error('Error storing profile pic:', error);
                }
            }
        });
    };

    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity onPress={selectProfilePic}>
                {profilePic ? (
                    <Image source={profilePic} style={styles.profilePic} />
                ) : (
                    <NoProfilePicture color="#000000" width="100%" height="100%" />
                )}
            </TouchableOpacity>
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

export default ImagePicker;
