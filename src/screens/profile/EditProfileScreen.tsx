import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { EditProfileScreenProp } from '@navigation/types';
import ScreenHeader from '@components/ScreenHeader';
import { useRef } from 'react';
import { Gender } from '@constants/enums'
import LabelInput from '@components/LabelInput';
import SelectInput from '@components/SelectInput';
import DatePicker from '@components/DatePicker';
import ScrollableScreen from '@components/ScrollableScreen';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import Button from '@components/Button';
import { persistor } from '@redux/store';
import { updateUserState } from '@redux/actions/userActions';
import Toast from 'react-native-toast-message';
import ImagePicker from '@screens/profile/components/ImagePicker';

const EditProfileScreen = ({ navigation }: EditProfileScreenProp) => {

    const initialFirstName = useAppSelector(state => state.user.firstName) ?? undefined;
    const initialLastName = useAppSelector(state => state.user.lastName) ?? undefined;
    const initialGender = useAppSelector(state => state.user.gender) ?? undefined;
    const initialHeight = useAppSelector(state => state.user.height) ?? undefined;
    const initialWeight = useAppSelector(state => state.user.weight) ?? undefined;
    const initalBirthTimestamp = useAppSelector(state => state.user.birthDate ?? undefined)
    const initialBirthDate = initalBirthTimestamp ? new Date(initalBirthTimestamp) : new Date();

    const firstNameRef = useRef<string | undefined>(initialFirstName);
    const lastNameRef = useRef<string | undefined>(initialLastName);
    const genderRef = useRef<Gender | undefined>(initialGender);
    const heightRef = useRef<number | undefined>(initialHeight);
    const weightRef = useRef<number | undefined>(initialWeight);
    const birthDateRef = useRef<Date | undefined>(initialBirthDate);

    const dispatch = useAppDispatch();

    const genderOptions = Object.entries(Gender).map((value, index) => ({
        key: value[0],
        label: value[1]
    }));

    const today = new Date();
    const maxDate = new Date();
    const minDate = new Date(1924, 0, 1);
    maxDate.setDate(today.getDate() - 1);

    const initialGenderOption = genderOptions.findIndex(({ key, label }) => key === 'MALE');

    const handlePress = () => {

        if (initialFirstName !== firstNameRef.current) { dispatch(updateUserState("firstName", firstNameRef.current as string)); };
        if (initialLastName !== lastNameRef.current) { dispatch(updateUserState("lastName", lastNameRef.current as string)); };
        if (initialGender !== genderRef.current) { dispatch(updateUserState("gender", genderRef.current ?? Gender.NON_SPECIFIED)); };
        if (initialHeight !== heightRef.current) { dispatch(updateUserState("height", heightRef.current as number)); };
        if (initialWeight !== weightRef.current) { dispatch(updateUserState("weight", weightRef.current as number)); };
        if (initalBirthTimestamp !== birthDateRef.current) { dispatch(updateUserState("birthDate", birthDateRef.current?.toISOString() as string)); };

        setTimeout(() => {
            persistor.persist();
        }, 100);

        Toast.show({
            type: 'success',
            text1: 'Profile Updated Succesfully',
        });
    }



    return (
        <ScrollableScreen style={styles.Layout} >
            <ScreenHeader title={"Edit Profile"} onPress={() => navigation.navigate("ProfileOptions")} />
            <ImagePicker style={styles.PictureWrapper} />
            <View style={styles.FieldLayout}>
                <LabelInput
                    valueRef={firstNameRef}
                    key="firstName"
                    label="First Name"
                    initialValue={initialFirstName ?? undefined}
                    isRequired={true}
                    style={styles.Input} />
                <LabelInput
                    valueRef={lastNameRef}
                    key="lastName"
                    label="Last Name"
                    initialValue={initialLastName ?? undefined}
                    isRequired={true}
                    style={styles.Input} />
                <DatePicker
                    valueRef={birthDateRef}
                    label="Your Birth Date"
                    minDate={minDate}
                    maxDate={maxDate}
                    errorDate={today}
                    initialValue={initialBirthDate} />
                <SelectInput
                    valueRef={genderRef}
                    label="Gender"
                    initialOption={initialGenderOption === -1 ? undefined : initialGenderOption}
                    options={genderOptions}
                    style={styles.SelectInput}
                />
                <LabelInput
                    valueRef={heightRef}
                    key="height"
                    label="Height"
                    type="numeric"
                    unit="cm"
                    maxValue={250}
                    minValue={100}
                    initialValue={initialHeight}
                    isRequired={true}
                    style={styles.Input} />
                <LabelInput
                    valueRef={weightRef}
                    key="weight"
                    label="Weight"
                    type="numeric"
                    unit="kg"
                    maxValue={500}
                    minValue={20}
                    initialValue={initialWeight}
                    isRequired={true}
                    style={styles.Input} />
                <Button title='Save' onPress={() => handlePress()} style={styles.Button} textStyle={styles.ButtonText} />
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

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        gap: 12,
        paddingTop: 20,
    },



    Input: {
    },

    SelectInput: {
        marginTop: 40,
        marginBottom: 10,
    },

    Button: {
        width: '100%',
        height: 50,
        backgroundColor: '#15F5BA',
        marginTop: 10,
    },

    ButtonText: {
        color: '#211951',
    },




});

export default EditProfileScreen;