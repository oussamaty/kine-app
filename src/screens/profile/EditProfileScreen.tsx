import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { EditProfileScreenProp } from '@navigation/types';
import FixedScreen from '@components/FixedScreen';
import NoProfilePicture from '@assets/svg/no_profile_picture.svg';
import ScreenHeader from 'src/components/ScreenHeader';
import { useRef, useState } from 'react';
import { Roboto } from 'src/theme/font';
import NumberInput from 'src/components/NumberInput';
import DropDownPicker from '@components/DropDownPicker';
import { Gender } from '@constants/enums'

const EditProfile = ({ navigation }: EditProfileScreenProp) => {

    const nameRef = useRef(null);
    const dateRef = useRef(null);
    const currentOption = 'female';
    const options = [
        { label: 'Male', value: Gender.MALE },
        { label: 'Female', value: Gender.FEMALE },
        { label: 'Non Specified', value: Gender.NON_SPECIFIED }
    ]


    return (
        <FixedScreen style={styles.Layout} >
            <ScreenHeader title={"Edit Profile"} onPress={() => navigation.navigate("ProfileOptions")} />
            <View style={styles.PictureWrapper}>
                <NoProfilePicture color="#000000" width="100%" height="100%" />
            </View>
            <View style={styles.FieldLayout}>
                <Text style={styles.Text}>Name</Text>
                <TextInput
                    ref={nameRef}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="Maleen Hawkins"
                    placeholderTextColor="#6b7280"
                    style={styles.Input}
                />
            </View>
            <View style={styles.FieldLayout}>
                <Text style={styles.Text}>Birthday</Text>
                <TextInput
                    ref={dateRef}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="phone-pad"
                    placeholder="02-03-2012"
                    placeholderTextColor="#6b7280"
                    style={styles.Input}
                />
            </View>
            <View style={styles.FieldLayout}>
                <Text style={styles.Text}>Gender</Text>
                <DropDownPicker currentOption={currentOption} options={options} />
            </View>
            <View style={styles.FieldLayout}>
                <Text style={styles.Text}>Height</Text>
                <NumberInput initialValue={186} ></NumberInput>
            </View>
            <View style={styles.FieldLayout}>
                <Text style={styles.Text}>Weight</Text>
                <NumberInput initialValue={76} ></NumberInput>
            </View>
        </FixedScreen>
    )
};

const styles = StyleSheet.create({
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

    PictureWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: 150,
        height: 150,
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

export default EditProfile;