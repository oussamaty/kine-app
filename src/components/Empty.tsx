import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import Icon from '@components/Icon';
import { Roboto } from '@theme/font';
import EmptyIcon from '@assets/icons/empty-set.svg';

type EmptyProps = {
    icon?: React.FC<SvgProps>;
    message?: string;
    style?: ViewStyle;
}

const Empty: React.FC<EmptyProps> = ({ icon, message, style }) => {

    return (
        <View style={[styles.Container, style]}>
            <Icon Source={icon ?? EmptyIcon} fill={'#211951'} style={styles.Icon} />
            <Text style={styles.Message}>{message ?? "There is nothing to be found here."}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        width: '100%',
        gap: 20,
        backgroundColor: '#ddd',
        borderRadius: 10,
    },

    Icon: {
        width: 60,
        height: 60,
    },

    Message: {
        fontFamily: Roboto.black,
        fontSize: 18,
        color: '#211951',
        fontWeight: '800',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

export default Empty;