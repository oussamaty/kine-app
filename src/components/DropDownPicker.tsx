import * as React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';


type DropdownOption = {
    label: string,
    value: string,
};

type DropdownPickerProps = {
    currentOption: string,
    options: DropdownOption[],
    style?: ViewStyle,
    styleDropDown?: ViewStyle,
};

const DropdownPicker: React.FC<DropdownPickerProps> = ({ options, currentOption, style, styleDropDown }) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(currentOption);
    const [items, setItems] = useState(options);

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={[styles.DropDownPicker, style]}
            dropDownContainerStyle={[styles.DropdownContainer, styleDropDown]}

        />
    )
}

const styles = StyleSheet.create({
    DropdownContainer: {
        width: 320,
    },

    DropDownPicker: {
        height: 45,
        width: 320,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },
})

export default DropdownPicker;