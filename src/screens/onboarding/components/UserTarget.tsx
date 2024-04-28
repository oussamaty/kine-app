import * as React from 'react';
import { useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import LabelInput from '@components/LabelInput';
import { Roboto } from '@theme/font';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { updateUserState } from '@redux/actions/userActions';
import DatePicker from '@components/DatePicker';

type UsertargetProps = {
    check: boolean;
    setCheck: Dispatch<SetStateAction<boolean>>;
    setValid: Dispatch<SetStateAction<boolean>>;
    style?: ViewStyle;
}

const UserTarget: React.FC<UsertargetProps> = ({ check, setCheck, setValid, style }) => {

    const initialTarget = useAppSelector(state => state.user.target) ?? undefined;
    const initialTargetTimestamp = useAppSelector(state=> state.user.targetDate ?? undefined);
    const initialTargetDate = initialTargetTimestamp ? new Date(initialTargetTimestamp): new Date();

    const targetRef = useRef<number | undefined>(initialTarget);
    const targetDateRef = useRef<Date | undefined>(initialTargetDate);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (check) {
            const valid = validInputs();
            if (valid) {
                dispatch(updateUserState("target", targetRef.current as number));
                dispatch(updateUserState("targetDate", targetDateRef.current?.toISOString() as string));
            }
            setValid(valid);
            setCheck(false);
        }
    }, [check]);

    const today = new Date();
    const minDate = new Date();
    const maxDate = new Date();
    minDate.setDate(today.getDate() + 30);
    maxDate.setDate(today.getDate() + 365);

    const validInputs = () => {
        if (!(targetRef.current && targetDateRef.current)) return false;
        if (!(targetRef.current !== 0 && targetDateRef.current.toISOString() != today.toISOString())) return false;
        return true;
    };

    return (
        <View style={[styles.Content, style]}>
            <Text style={styles.Title}>
               What Is Your Target ?
            </Text>
            <View style={styles.Container}>
                <LabelInput
                    valueRef={targetRef}
                    key="target"
                    label="Target Weight"
                    type="numeric"
                    unit="kg"
                    maxValue={500}
                    minValue={30}
                    initialValue={initialTarget}
                    isRequired={true}
                    style={styles.Input} />
                <DatePicker
                    valueRef={targetDateRef}
                    label="Target Date"
                    minDate={minDate}
                    maxDate={maxDate}
                    errorDate={today}
                    initialValue={initialTargetDate}
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

export default UserTarget;