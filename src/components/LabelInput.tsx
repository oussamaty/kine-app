import React, { useState, useRef, useEffect, MutableRefObject } from 'react';
import { View, TextInput, Animated, StyleSheet, ViewStyle, TextStyle, Text } from 'react-native';
import { Roboto } from '@theme/font';
import { isNumeric } from '@utils/index';

type LabelInputType = "text" | "numeric";
type LabelInputValue = string | number | undefined;

type LabelInputProps = {
  label: string;
  type?: LabelInputType;
  unit?: string;
  initialValue?: LabelInputValue;
  minValue?: number;
  maxValue?: number;
  isRequired?: boolean;
  isDisabled?: boolean;
  onChange?: (text: string) => void;
  valueRef?: MutableRefObject<LabelInputValue>;
  style?: ViewStyle;
}

const LabelInput: React.FC<LabelInputProps> = ({ label, type, unit, initialValue, minValue, maxValue, isRequired, isDisabled, onChange, valueRef, style }) => {
  const startFloating = initialValue !== undefined && initialValue !== "";
  const defaultValue = initialValue === undefined ? undefined : initialValue.toString();

  const [floatingLabel, setFloatingLabel] = useState<boolean>(startFloating);
  const [error, setError] = useState<string | undefined>();

  const labelAnim = useRef(new Animated.Value(startFloating ? 1 : 0)).current;
  const inputValue = useRef<string | undefined>(defaultValue);

  useEffect(() => {
    Animated.timing(labelAnim, {
      toValue: floatingLabel ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [floatingLabel]);

  const handleFocus = () => {
    setFloatingLabel(true);
  };

  const handleBlur = () => {
    if (inputValue.current !== undefined && inputValue.current !== "") {
      setFloatingLabel(true);
    } else {
      setFloatingLabel(false);
    }
  };

  const handleChange = (text: string) => {
    inputValue.current = text;

    if (isRequired && text.trim() == "") {
      const requiredFieldError = "Please fill this field";
      if (error !== requiredFieldError) {
        setError("Please fill this field");
      }
    } else if (type === "numeric" && !isNumeric(text) && text !== "") {
      const validNumberError = "Please provide a valid number";
      if (error != validNumberError) {
        setError(validNumberError);
      }
    } else if (type === "numeric" && isNumeric(text)) {
      const value = parseInt(text);
      if ((minValue && value < minValue) || (maxValue && value > maxValue)) {
        const rangeError = "Please provide a reasonable number";
        if (error != rangeError) {
          setError(rangeError)
        }
      } else if (error) {
        setError(undefined);
      }
    } else if (error) {
      setError(undefined);
    }

    if (valueRef) {
      if (type === "numeric") {
        if (isNumeric(text)) {
          const value = parseInt(text);
          if ((minValue && value < minValue) || (maxValue && value > maxValue)) {
            valueRef.current = undefined;
          } else {
            valueRef.current = value;
          }
        } else {
          valueRef.current = undefined;
        }
      } else {
        valueRef.current = text;
      }
    }

    if (onChange) {
      onChange(text);
    }
  };

  const labelStyle: Animated.WithAnimatedObject<TextStyle> = {
    position: "absolute",
    left: 16,
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
      <View style={[styles.InputField, error ? styles.InputFieldError : styles.InputFieldFocus]}>
        <TextInput
          style={styles.Input}
          aria-disabled={isDisabled === true}
          keyboardType={type === "numeric" ? "numeric" : "default"}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChange}
        />
        {unit && <Text style={[styles.Unit, error ? styles.UnitError : styles.UnitFocus]} numberOfLines={1} ellipsizeMode="tail">{unit}</Text>}
      </View>
      {error && <Text style={styles.Error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 100,
    paddingTop: 24,
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

});

export default LabelInput;
