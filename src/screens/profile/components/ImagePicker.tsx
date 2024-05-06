import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useAppDispatch } from '@hooks/index';
import { updateUserState } from '@redux/actions/userActions';
import { persistor } from '@redux/store';
import ProfileImage from './ProfileImage';

interface ImagePickerProps {
    style?: ViewStyle;
}

const ImagePicker: React.FC<ImagePickerProps> = ({ style }) => {

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
                    const selectedImage = response.assets[0].uri;
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
            <ProfileImage style={style} />
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

