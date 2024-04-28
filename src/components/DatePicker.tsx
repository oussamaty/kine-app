import * as React from 'react';
import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { StyleSheet, View, ViewStyle, Platform, TouchableOpacity, Text, Animated, TextStyle, Keyboard } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Roboto } from '@theme/font';

type DatePickerProps = {
    label: string;
    initialValue?: Date;
    minDate?: Date;
    maxDate?: Date;
    errorDate?: Date;
    valueRef?: MutableRefObject<Date | undefined>;
    style?: ViewStyle;
};

const DatePicker: React.FC<DatePickerProps> = ({ label, initialValue, minDate, maxDate, errorDate, valueRef, style }) => {
    const undefinedDate = errorDate || new Date();
    const startFloating = initialValue !== undefined && initialValue.toISOString() !== undefinedDate.toISOString();
    const [date, setDate] = useState<Date>(initialValue ?? undefinedDate);
    const [show, setShow] = useState<boolean>(false);
    const labelAnim = useRef(new Animated.Value(startFloating ? 1: 0)).current;

    useEffect(() => {
        Animated.timing(labelAnim, {
          toValue: date.toISOString() !== undefinedDate.toISOString() ? 1 : 0,
          duration: 200,
          useNativeDriver: false,
        }).start();
    }, [date]);

    const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        if (valueRef) {
            valueRef.current = currentDate.toISOString() === undefinedDate.toISOString() ? undefined: currentDate;
        }
    };
    
    const showDatepicker = () => {
        Keyboard.dismiss();
        setShow(true);
    };

    
    const labelStyle: Animated.WithAnimatedObject<TextStyle> = {
        position: "absolute",
        left: 12,
        fontFamily: Roboto.bold,
        top: labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [40, 0],
        }),
        
        fontSize: labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 16],
        }),

        fontWeight: labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['400', '700'],
        }), 
        
        color: labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#555', '#000'],
        }),
    };

    return (
        <View style={[styles.Container, style]}>
            <Animated.Text style={labelStyle}>
                {label}
            </Animated.Text>
            <TouchableOpacity style={styles.Input} onPress={showDatepicker}>
                <Text style={styles.InputText}>{date.toISOString() === undefinedDate.toISOString() ? "": date.toLocaleDateString('fr')}</Text>
            </TouchableOpacity>
            {   show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        maximumDate={maxDate}
                        minimumDate={minDate}
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChange}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        padding: 0,
        margin: 0,
        height: 74,
        backgroundColor: '#fff',
        paddingTop: 24,
    },

    Input: {
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    InputText: {
        color: '#000',
        fontFamily: Roboto.bold,
        fontSize: 20,
        fontWeight: '500',
        paddingHorizontal: 10,
    },
});

export default DatePicker;