import * as React from 'react';
import { useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import LabelInput from '@components/LabelInput';
import { Roboto } from '@theme/font';
import SelectInput from '@components/SelectInput';
import { Gender } from '@constants/enums';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { updateUserState } from '@redux/actions/userActions';

type UserInfoProps = {
    check: boolean;
    setCheck: Dispatch<SetStateAction<boolean>>;
    setValid: Dispatch<SetStateAction<boolean>>;
    style?: ViewStyle;
}

const UserInfo: React.FC<UserInfoProps> = ({ check, setCheck, setValid, style }) => {

    const initialFirstName = useAppSelector(state => state.user.firstName) ?? undefined;
    const initialLastName = useAppSelector(state => state.user.lastName) ?? undefined;
    const initialGender = useAppSelector(state=> state.user.gender) ?? undefined;

    const firstNameRef = useRef<string | undefined>(initialFirstName);
    const lastNameRef = useRef<string | undefined>(initialLastName);
    const genderRef = useRef<Gender | undefined>(initialGender);

    const dispatch = useAppDispatch();

    const validInputs = () => {
        if (!(firstNameRef.current && lastNameRef.current && genderRef.current)) return false;
        if (!(firstNameRef.current !== "" && lastNameRef.current !== "")) return false;
        return true;
    };

    const genderOptions = Object.entries(Gender).map((value, index) => ({
        key: value[0],
        label: value[1]
    }));

    const initialGenderOption = genderOptions.findIndex(({ key, label }) => key === initialGender);

    useEffect(() => {
        if (check) {
            const valid = validInputs();
            if (valid) {
                dispatch(updateUserState("firstName", firstNameRef.current as string));
                dispatch(updateUserState("lastName", lastNameRef.current as string));
                dispatch(updateUserState("gender", genderRef.current ?? Gender.NON_SPECIFIED));
            }
            setValid(valid);
            setCheck(false);
        }
    }, [check]);

    return (
        <View style={[styles.Content, style]}>
            <Text style={styles.Title}>
               Tell Us About Yourself?
            </Text>
            <View style={styles.Container}>
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
                <SelectInput
                    valueRef={genderRef}
                    label="Gender"
                    initialOption={initialGenderOption === -1 ? undefined: initialGenderOption}
                    options={genderOptions}
                    style={styles.SelectInput} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        width: '100%',
        paddingTop: 16,
    },
    
    Title: {
        color: '#000000',
        fontFamily: Roboto.black,
        fontWeight: '800',
        fontSize: 26,
    },

    Container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        gap: 16,
        paddingTop: 20,
    },

    Input : {

    },

    SelectInput: {
        marginTop: 20,
    },

});

export default UserInfo;