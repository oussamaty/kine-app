import React, { useState, useRef, MutableRefObject } from 'react';
import { View, TextInput, StyleSheet, ViewStyle, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';
import Icon from '@components/Icon';
 
type InputProps = {
    placeholder?: string;
    initialValue?: string;
    iconLeft?: React.FC<SvgProps>;
    iconRight?: React.FC<SvgProps>;
    isRequired?: boolean;
    isDisabled?: boolean;
    onChange?: (text: string) => void;
    valueRef?: MutableRefObject<string>;
    style?: ViewStyle;
}

const Input: React.FC<InputProps> = ({ placeholder, initialValue, iconLeft, iconRight, isRequired, isDisabled, onChange, valueRef, style }) => {
  const defaultValue = initialValue === undefined ? undefined: initialValue.toString();

  const [error, setError] = useState<string | undefined>();
  const inputValue = useRef<string | undefined>(defaultValue);

  const handleChange = (text: string) => {
    inputValue.current = text;

    if (isRequired && text.trim() == "") {
        const requiredFieldError = "Please fill this field";
        if (error !== requiredFieldError) {
            setError("Please fill this field");
        }
    } if (error) {
        setError(undefined);
    }

    if (valueRef) {
        valueRef.current = text;
    }

    if (onChange) {
        onChange(text);
    }
  };

  return (
    <View style={[styles.Container, style]}>
        <View style={[styles.InputField, error ? styles.InputFieldError: styles.InputFieldFocus]}>
            { iconLeft &&
                <View style={styles.IconWrapperLeft}>
                    <Icon Source={iconLeft} style={styles.Icon} fill="#444"/>
                </View>
            }
            <TextInput
                style={styles.Input}
                aria-disabled={isDisabled === true}
                defaultValue={defaultValue}
                onChangeText={handleChange}
                placeholder={placeholder}
                />
            { iconRight &&
                <View style={styles.IconWrapperRight}>
                    <Icon Source={iconRight} style={styles.Icon} fill="#444"/>
                </View>
            }
        </View>
        { error && <Text style={styles.Error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
    Container: {
        height: 60,
        width: '100%',
    },

    InputField: {
        height: 60,
        borderWidth: 1,
        borderColor: '#444',
        width: '100%',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
    },

    InputFieldError: {
        borderColor: 'red',
    },

    InputFieldFocus: {

    },

    Input: {
        height: '100%',
        flex: 5,
        paddingHorizontal: 12,
        fontSize: 20,
        color: '#000',
    },

    Unit: {
        height: '100%',
        flex: 1,
        fontSize: 18,
        color: '#999',
        borderLeftWidth: 1,
        borderColor: '#999',
        textAlignVertical: 'center',
        textAlign: 'center',
    },

    UnitError: {
        borderColor: 'red',
        color: 'red',
    },

    UnitFocus: {

    },

    Error: {
        fontSize: 14,
        color: 'red',
        marginTop: 4,
    },

    IconWrapperLeft: {
        height: '100%',
        width: 36,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    IconWrapperRight: {
        height: '100%',
        width: 36,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    Icon: {
        padding: 0,
        margin: 0,
        width: 20,
        height: 20,
    }

});

export default Input;
