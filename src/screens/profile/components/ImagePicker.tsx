import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import NoProfilePicture from '@assets/icons/no_profile_picture.svg';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { updateUserState } from '@redux/actions/userActions';
import { persistor } from '@redux/store';

const ImagePicker = ({ style = {} }) => {

    const profilePic = useAppSelector((state) => state.user.profilePicture);
    const dispatch = useAppDispatch();

    const selectProfilePic = () => {

        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.error('ImagePicker Error:', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const asset = response.assets[0];
                if (asset.uri) {
                    const selectedImage = { uri: response.assets[0].uri };

                    try {
                        dispatch(updateUserState("profilePicture", selectedImage));
                        setTimeout(() => { persistor.persist() }, 100);
                    } catch (error) {
                        console.error('Error storing profile pic:', error);
                    }
                } else {
                    console.error('Image does not have a valid URI');
                }
            }
        });
    };

    return (
        <TouchableOpacity onPress={selectProfilePic}>
            <View style={[styles.container, style]}>
                {profilePic === null ? (
                    <NoProfilePicture color="#000000" width="100%" height="100%" />
                ) : (
                    <Image source={profilePic} style={styles.profilePic} />
                )}
            </View>
        </TouchableOpacity>

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

