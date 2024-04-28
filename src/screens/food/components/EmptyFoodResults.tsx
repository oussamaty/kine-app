import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from '@components/Icon';
import Plus from '@assets/icons/plus.svg';
import UserChef from '@assets/icons/user-chef.svg';
import { Roboto } from '@theme/font';

type EmptyFoodResultsProps = {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
};

const EmptyFoodResults: React.FC<EmptyFoodResultsProps> = ({ title, onPress, style }) => {

    return (
        <View style={[styles.Container, style]}>
            <Icon Source={UserChef} fill='#000' style={styles.Icon} />
            <Text style={styles.Title}>{title}s</Text>
            <Text style={styles.Description}>
                Couldn't find what you are looking for ?
                Enter it.
            </Text>
            <TouchableOpacity style={styles.Button} onPress={() => onPress()}>
                <Icon Source={Plus} fill='#211951' style={styles.ButtonIcon} />
                <Text style={styles.ButtonText}>Create New {title}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: 30,
        gap: 20,
    },

    Icon: {
        width: 60,
        height: 60,
    },

    Title: {
        fontFamily: Roboto.black,
        fontSize: 24,
        fontWeight: '800',
        color: '#000',
    },

    Description: {
        fontFamily: Roboto.black,
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center',
    },

    Button: {
        backgroundColor: '#15F5BA',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 200,
        gap: 10,
        borderRadius: 8,
    },

    ButtonIcon: {
        width: 16,
        height: 16,
    },

    ButtonText: {
        fontFamily: Roboto.black,
        fontSize: 16,
        fontWeight: '500',
        color: '#211951',
    }
});

export default EmptyFoodResults;