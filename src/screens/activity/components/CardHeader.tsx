import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import Icon from '@components/Icon';
import { Roboto } from 'src/theme/font';

type CardHeaderProps = {
    label: string;
    icon: React.FC<SvgProps>;
};

const CardHeader: React.FC<CardHeaderProps> = ({ label, icon }) => {

    return (
        <View style={styles.Container}>
            <Text style={styles.Label}>{label}</Text>
            <Icon Source={icon} fill={"#211951"} style={styles.Icon} />
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },

    Label: {
        fontFamily: Roboto.bold,
        color: '#211951',
        fontSize: 18,
        fontWeight: '800',
        width: '50%',
    },

    Icon: {
        width: 20,
        height: 20,
    },

});

export default CardHeader;