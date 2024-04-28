import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { EditProfileScreenProp } from '@navigation/types';
import NoProfilePicture from '@assets/icons/no_profile_picture.svg';
import ScreenHeader from '@components/ScreenHeader';
import { useRef } from 'react';
import { Roboto } from '@theme/font';
import { Gender } from '@constants/enums'
import LabelInput from '@components/LabelInput';
import SelectInput from '@components/SelectInput';
import DatePicker from '@components/DatePicker';
import ScrollableScreen from '@components/ScrollableScreen';

const EditProfileScreen = ({ navigation }: EditProfileScreenProp) => {

    const nameRef = useRef(null);
    const dateRef = useRef(null);

    const genderOptions = Object.entries(Gender).map((value, index) => ({
        key: value[0],
        label: value[1]
    }));

    const initialGenderOption = genderOptions.findIndex(({ key, label }) => key === 'MALE');


    return (
        <ScrollableScreen style={styles.Layout} >
            <ScreenHeader title={"Edit Profile"} onPress={() => navigation.navigate("ProfileOptions")} />
            <View style={styles.PictureWrapper}>
                <NoProfilePicture color="#000000" width="100%" height="100%" />
            </View>
            <View style={styles.FieldLayout}>
                <LabelInput
                    label='Name'
                    initialValue="Maleen Hawkins" />
                <DatePicker
                    label='BirthDate'
                    initialValue={new Date(11, 7, 1985)} />
                <SelectInput
                    label="Gender"
                    initialOption={initialGenderOption === -1 ? undefined: initialGenderOption}
                    options={genderOptions}
                    style={styles.Select} />
                <LabelInput label='Height' initialValue={186} ></LabelInput>
                <LabelInput label='Weigh' initialValue={76} ></LabelInput>
            </View>
        </ScrollableScreen>
    )
};

const styles = StyleSheet.create({
    Layout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        gap: 30,
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
        width: '100%',
        flexDirection: 'column',
        padding: 10,
        gap: 10,
    },

    Select: {
        paddingTop: 30,
        paddingBottom: 10,
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

export default EditProfileScreen;