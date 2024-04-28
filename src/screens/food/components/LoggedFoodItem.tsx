import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from '@components/Icon';
import XMark from '@assets/icons/xmark.svg';
import Plus from '@assets/icons/plus.svg';
import { Roboto } from '@theme/font';

type LoggedFoodItemProps = {
    id: string,
    name: string,
    calories: number,
    serving: number,
    unit: string,
    add?: boolean,
    onItemPress: (id: string) => void;
    onButtonPress: (id: string, add: boolean) => void;
    style?: ViewStyle;
};

const LoggedFoodItem: React.FC<LoggedFoodItemProps> = ({ id, name, calories, serving, unit, add, onItemPress, onButtonPress, style }) => {

    return (
        <View style={[styles.Container, style]} >
            <TouchableOpacity style={styles.Content} onPress={() => onItemPress(id)}>
                <Text style={styles.Name}>{name}</Text>
                <Text style={styles.Calories}>{`${calories} Kcal | ${serving} ${unit}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Button, { borderColor: add ? '#15F5BA': 'red'}]} onPress={() => onButtonPress(id, add === true)}>
                <Icon Source={add ? Plus: XMark} fill={add ? '#15F5BA': 'red'} style={styles.Icon}></Icon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 12,
        paddingHorizontal: 20,
        backgroundColor: '#B5E2FA99',
    },

    Content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 10,
        gap: 5,
    },

    Name: {
        fontFamily: Roboto.black,
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
    },

    Calories: {
        fontFamily: Roboto.black,
        fontSize: 18,
        fontWeight: '500',
        color: '#000',
    },

    Button: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Icon: {

    }
});

export default LoggedFoodItem;