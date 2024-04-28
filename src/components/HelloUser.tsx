import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Roboto } from '@theme/font';

type HelloUserProps = {
    name: string;
    style?: ViewStyle;
};

const HelloUser: React.FC<HelloUserProps> = ({ name, style }) => {

    return (
        <View style={[styles.Container, style]}>
            <Text style={styles.Hello}>Hello,</Text>
            <Text style={styles.Name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    Hello: {
        fontFamily: Roboto.black,
        fontSize: 18,
        fontWeight: '600',
        color: '#211951',
        padding: 0,
        margin: 0,
        lineHeight: 22,
    },

    Name: {
        fontFamily: Roboto.black,
        fontSize: 24,
        fontWeight: '900',
        color: '#211951',
        padding: 0,
        margin: 0,
        lineHeight: 28,
    },
});

export default HelloUser;