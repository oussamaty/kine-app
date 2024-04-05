import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';
import Icon from '@components/Icon';
import ChevronRight from '@assets/icons/chevron-right.svg';
import { Roboto } from '@theme/font';
import { SvgProps } from 'react-native-svg';

type OptionItemProps = {
    title?: string,
    icon?: React.FC<SvgProps>,
    nextButton?: boolean,
    onPress?: (event: GestureResponderEvent) => void;
}

const OptionItem: React.FC<OptionItemProps> = ({ title, icon, nextButton, onPress }) => {

    return (
        <View style={styles.Header}>
            {
                icon ?
                    <View style={styles.IconWrapper}>
                        <Icon Source={icon} style={styles.Icon} />
                    </View>
                    :
                    <></>
            }
            {
                title ?
                    <Text style={styles.HeaderTitle}>
                        {title}
                    </Text> :
                    <></>
            }
            {
                nextButton === false ? <></> :
                    <TouchableOpacity style={styles.HeadernextButton} onPress={onPress}>
                        <Icon style={styles.IconSwitch} Source={ChevronRight} />
                    </TouchableOpacity>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: '100%',
        height: 50,
        paddingHorizontal: 30,
        color: '#000000',
        position: 'relative',
        gap: 25,
    },

    HeaderTitle: {
        fontSize: 18,
        fontFamily: Roboto.medium,
        fontWeight: "800",
        textAlign: "center",
        color: '#000000',
    },

    HeadernextButton: {
        position: 'absolute',
        right: 20,
        zIndex: 1,
    },

    IconSwitch: {
        width: 25,
        height: 25,
    },

    IconWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: 45,
        height: 45,
        borderRadius: 10,
        overflow: 'hidden',
    },

    Icon: {
        width: 45,
        height: 45,
        borderRadius: 10,
        overflow: 'hidden',
    },
})

export default OptionItem;