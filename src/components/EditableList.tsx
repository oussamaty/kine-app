import * as React from 'react';
import { useState, useRef, useEffect, Dispatch, MutableRefObject, SetStateAction } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import LabelInput from '@components/LabelInput';
import Icon from '@components/Icon';
import Minus from '@assets/icons/minus.svg';
import Plus from '@assets/icons/plus.svg';

type EditableListProps = {
    nameLabel: string;
    valueLabel: string;
    check: boolean;
    setList: Dispatch<SetStateAction<{ name: string, value: number }[] | undefined>>;
    initalValues?: { name: string, value: number }[];
};

const EditableList: React.FC<EditableListProps> = ({ nameLabel, valueLabel, initalValues, check, setList }) => {

    const [items, setItems] = useState<{ name: string | undefined, value: number | undefined }[]>(initalValues ?? []);
    const [count, setCount] = useState<number>(0);
    const [itemsCheck, setItemCheck] = useState<boolean>(false);

    const handleItemDelete = (itemIdx: number) => {
        setItems(items => items.filter((item, index) => index != itemIdx));
    };

    const handleItemAdd = () => {
        setItems(items => items.concat([{ name: undefined, value: undefined }]));
    };

    useEffect(() => {
        if (check) {
            setCount(0);
            setItemCheck(true);
        }
    }, [check])

    useEffect(() => {
        if (count === items.length) {
            const list = items.reduce<{ name: string, value: number }[] | undefined>((accumulator , current) => {
                if (accumulator === undefined) {
                    return undefined;
                }

                if (current.name === undefined || current.value === undefined) {
                    return undefined;
                }

                return accumulator.concat([{
                    name: current.name,
                    value: current.value
                }]);

            }, []);

            setList(list);
            setItemCheck(false);
        }
    }, [count]);

    return (
        <View style={styles.Container}>
            <View style={styles.Items}>
                {
                    items.map((item, index) => (
                        <EditableItem
                            key={index}
                            index={index}
                            nameLabel={nameLabel}
                            valueLabel={valueLabel}
                            name={item.name}
                            value={item.value}
                            onDeletePress={() => handleItemDelete(index)}
                            check={itemsCheck}
                            setItems={setItems}
                            setCount={setCount} />
                    ))
                }
            </View>
            <TouchableOpacity onPress={handleItemAdd} style={styles.AddButton}>
                <Icon Source={Plus} fill='#211951' style={styles.AddIcon} />
            </TouchableOpacity>
        </View>
    )
};

type EditableItemProps = {
    index: number;
    nameLabel: string;
    valueLabel: string;
    name?: string;
    value?: number;
    onDeletePress?: () => void;
    check: boolean;
    setItems: Dispatch<SetStateAction<{ name: string | undefined, value: number | undefined }[]>>;
    setCount: Dispatch<SetStateAction<number>>;
};

const EditableItem: React.FC<EditableItemProps> = ({ index, nameLabel, valueLabel, name, value, onDeletePress, check, setItems, setCount }) => {
    const nameRef = useRef<string | undefined>(name);
    const valueRef = useRef<number | undefined>(value);

    useEffect(() => {
        if (check) {
            setItems(items => items.map((item, idx) => {
                if (index === idx) {
                    return {
                        name: nameRef.current,
                        value: valueRef.current
                    };
                }
                return item;
            }));
            setCount(count => count + 1);
        }
    }, [check])

    return (
        <View style={styles.Item}>
            <TouchableOpacity onPress={onDeletePress} style={styles.ItemButton}>
                <Icon Source={Minus} fill='#fff' style={styles.ItemIcon} />
            </TouchableOpacity>
            <LabelInput
                label={nameLabel}
                type='text'
                valueRef={nameRef}
                initialValue={name}
                style={styles.ItemServing} />
            <LabelInput
                label={valueLabel}
                type='numeric'
                valueRef={valueRef}
                initialValue={value}
                minValue={0}
                style={styles.ItemAmount} />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Items: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    AddButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#15F5BA',
        width: 50,
        height: 50,
        borderRadius: 50,
    },

    AddIcon: {
        width: 25,
        height: 25,
    },

    Item: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    ItemButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 30,
        height: 30,
        borderRadius: 30,
    },

    ItemIcon: {
        width: 16,
        height: 16,
    },

    ItemServing: {
        flex: 1
    },

    ItemAmount: {
        flex: 1
    }
});

export default EditableList;