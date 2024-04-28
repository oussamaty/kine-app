import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { SvgProps } from 'react-native-svg';
import Icon from '@components/Icon';
import RadioCheck from '@components/RadioCheck';
import { Roboto } from '@theme/font';

export type CheckOptionProps = {
    content: string;
    active?: boolean;
    icon?: React.FC<SvgProps>;
    onPress?: (event: GestureResponderEvent) => void;
}

const CheckOption: React.FC<CheckOptionProps>  = ({ content, active, icon, onPress = () => {} }) => {
    return (
        <TouchableOpacity style={styles.CheckOption} onPress={onPress}>
            {icon ? <Icon style={styles.CheckOptionIcon} Source={icon} />: <></>}
            <Text style={styles.CheckOptionContent}>
                { content }
            </Text>
            <RadioCheck active={active ?? false} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    CheckOption: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderBottomWidth: 5,
        borderRadius: 12,
        width: '100%',
        height: 80,
        paddingHorizontal: 16,
        gap: 16,
    },

    CheckOptionIcon: {
        width: 24,
        height: 24,
    },

    CheckOptionContent: {
        flex: 1,
        color: '#000000',
        fontFamily: Roboto.bold,
        fontWeight: '700',
        fontSize: 16,

    },

    CheckOptionCheckbox: {
        width: 30,
        height: 30
    }

});

export default CheckOption;