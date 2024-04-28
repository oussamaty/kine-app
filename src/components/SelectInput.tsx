import * as React from 'react';
import { useState, MutableRefObject } from 'react';
import { FlatList, Keyboard, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from '@components/Icon';
import ChevronUp from '@assets/icons/chevron-up.svg';
import ChevronDown from '@assets/icons/chevron-down.svg';
import Check from '@assets/icons/check.svg';
import { Roboto } from '@theme/font';

type SelectInputItemProps = {
    active: boolean;
    label: string;
    onPress: () => void;
    style?: ViewStyle;
}

const SelectInputItem: React.FC<SelectInputItemProps> = ({ active, label, onPress, style }) => {
    return (
        <TouchableOpacity
            style={[styles.Item, style]}
            onPress={onPress}
        >
            <Text style={styles.ItemLabel}>{label}</Text>
            {active && <Icon Source={Check} style={styles.ItemIcon} />}
        </TouchableOpacity>
    )
}

const ItemSeperator = () => <View style={styles.ItemSeperator}></View>;

type SelectInputProps = {
    label: string,
    options: Array<{
        key: any, 
        label: string,
    }>;
    initialOption?: number;
    isRequired?: string;
    onChange?: (choice: string) => void;
    valueRef?: MutableRefObject<any>;
    style?: ViewStyle;
};

const SelectInput: React.FC<SelectInputProps> = ({ label, options, initialOption, isRequired, onChange, valueRef, style }) => {
    const [selected, setSelected] = useState<number | undefined>(initialOption);
    const [visible, setVisible] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();

    const handleOptionPress = (index: number) => {
        setSelected(index);
        setVisible(false);
        
        if (valueRef) {
            valueRef.current = options[index].key;
        }

        if (onChange) {
            onChange(options[index].key);
        }
    }

    const handleInputPress = () => {
        if (visible && selected === undefined) {
            if (error === undefined) {
                setError('Please select an option');
            }
        } else if (error) {
            setError(undefined);
        }
        Keyboard.dismiss();
        setVisible(!visible);
    }

    return (
        <View style={[styles.Container, style]}>
            <View style={[styles.SelectInput, error ? styles.SelectInputError: styles.SelectInputFocus]}>
                <TouchableOpacity
                    style={[styles.Input, visible ? styles.InputOpen: styles.InputClose]}
                    onPress={handleInputPress} >
                    <Text style={styles.InputText}>{visible ? label: selected !== undefined ? options[selected].label: label}</Text>
                    <Icon Source={visible ? ChevronUp: ChevronDown} style={styles.InputIcon}/>
                </TouchableOpacity>
                {
                    visible && (
                        <FlatList
                            style={styles.List}
                            data={options}
                            keyExtractor={({ key, label }, index) => key}
                            renderItem={({ item, index }) => (
                                <SelectInputItem
                                    active={selected === index}
                                    label={item.label}
                                    onPress={() => handleOptionPress(index)}
                                    />
                            )}
                            ItemSeparatorComponent={ItemSeperator}
                        />
                    )
                }
            </View>
            { error && <Text style={styles.Error}>{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        padding: 0,
        margin: 0,
    },

    SelectInput: {
        width: '100%',
        padding: 0,
        margin: 0,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 8,
    },

    SelectInputError: {
        borderColor: 'red',
    },

    SelectInputFocus: {

    },

    Input: {
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        color: '#000',
    },

    InputOpen: {
        borderBottomWidth: 1,
        borderColor: '#000',
        borderRadius: 4,
    },

    InputClose: {

    },

    InputText: {
        fontFamily: Roboto.bold,
        fontSize: 18,
        color: '#000',
    },

    InputIcon: {
        width: 20,
        height: 20,
    },

    List: {
        width: '100%',
        paddingTop: 5,
    },

    Item: {
        width: '100%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
    },

    ItemLabel: {
        fontFamily: Roboto.medium,
        fontSize: 16,
        color: '#555',
        fontWeight: '500',
    },

    ItemIcon: {
        width: 18,
        height: 18,
    },

    ItemSeperator: {
        height: 1,
        backgroundColor: '#999',
        marginHorizontal: 8,
        marginVertical: 0,
    },

    Error: {
        fontSize: 14,
        color: 'red',
        marginTop: 4,
    },

});

export default SelectInput;