import * as React from 'react';
import { useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import LabelInput from '@components/LabelInput';
import { Roboto } from '@theme/font';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { updateUserState } from '@redux/actions/userActions';
import DatePicker from 'src/components/DatePicker';

type UserStatsProps = {
    check: boolean;
    setCheck: Dispatch<SetStateAction<boolean>>;
    setValid: Dispatch<SetStateAction<boolean>>;
    style?: ViewStyle;
}

const UserStats: React.FC<UserStatsProps> = ({ check, setCheck, setValid, style }) => {
    
    const initialHeight = useAppSelector(state => state.user.height) ?? undefined;
    const initialWeight= useAppSelector(state => state.user.weight) ?? undefined;
    const initalBirthTimestamp = useAppSelector(state => state.user.birthDate ?? undefined)
    const initialBirthDate = initalBirthTimestamp ? new Date(initalBirthTimestamp): new Date();

    const heightRef = useRef<number | undefined>(initialHeight);
    const weightRef = useRef<number | undefined>(initialWeight);
    const birthDateRef = useRef<Date | undefined>(initialBirthDate);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (check) {
            const valid = validInputs();
            if (valid) {
                dispatch(updateUserState("height", heightRef.current as number));
                dispatch(updateUserState("weight", weightRef.current as number));
                dispatch(updateUserState("birthDate", birthDateRef.current?.toISOString() as string));
            }
            setValid(valid);
            setCheck(false);
        }
    }, [check]);

    const today = new Date();
    const maxDate = new Date();
    const minDate = new Date(1924, 0, 1);
    maxDate.setDate(today.getDate() - 1);

    const validInputs = () => {
        if (!(heightRef.current && weightRef.current && birthDateRef.current)) return false;
        if (!(heightRef.current !== 0 && weightRef.current !== 0 && birthDateRef.current.toISOString() != today.toISOString())) return false;
        return true;
    };

    return (
        <View style={[styles.Content, style]}>
            <Text style={styles.Title}>
               What Are Your Measurements ?
            </Text>
            <View style={styles.Container}>
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
                <DatePicker
                    valueRef={birthDateRef}
                    label="Your Birth Date"
                    minDate={minDate}
                    maxDate={maxDate}
                    errorDate={today}
                    initialValue={initialBirthDate}
                    style={styles.DatePicker} />
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

    DatePicker: {

    },

});

export default UserStats;