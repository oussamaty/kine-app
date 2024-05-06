import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';
import Icon from '@components/Icon';
import ChevronRight from '@assets/icons/chevron-right.svg';
import { Roboto } from '@theme/font';
import { SvgProps } from 'react-native-svg';

type OptionItemProps = {
    title?: string,
    IconSrc?: React.FC<SvgProps>,
    nextButton?: boolean,
    onPress?: (event: GestureResponderEvent) => void;
}

const OptionItem: React.FC<OptionItemProps> = ({ title, IconSrc, nextButton, onPress }) => {

    return (
        <TouchableOpacity style={styles.Header} onPress={onPress}>
            {
                IconSrc ?
                    <View style={styles.IconWrapper}>
                        <Icon style={styles.Icon} Source={IconSrc} fill="#0FA3B1" />
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
                    <View style={styles.HeadernextButton} >
                        <Icon style={styles.IconSwitch} Source={ChevronRight} />
                    </View>
            }
        </TouchableOpacity>
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

        alignItems: 'center',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: 45,
        height: 45,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: "#B5E2FA",
    },

    Icon: {
        width: 35,
        height: 35,
        borderRadius: 10,
        overflow: 'hidden',
    },
})

export default OptionItem;