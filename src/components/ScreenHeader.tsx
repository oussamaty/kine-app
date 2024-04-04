import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';
import Icon from '@components/Icon';
import ChevronLeft from '@assets/icons/chevron-left.svg';
import { Roboto } from '@theme/font';

type ScreenHeaderProps = {
    title?: string,
    backButton?: boolean,
    onPress?: (event: GestureResponderEvent) => void;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, backButton, onPress }) => {

    return (
        <View style={styles.Header}>
            {
                backButton === false ? <></>: 
                <TouchableOpacity style={styles.HeaderBackButton} onPress={onPress}>
                    <Icon style={styles.Icon} Source={ChevronLeft} />
                </TouchableOpacity>
            }
            {
                title ?
                    <Text style={styles.HeaderTitle}>
                        { title }
                    </Text>: 
                    <></>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    Header : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: 50,
        paddingHorizontal: 10,
        color: '#000000',
        position: 'relative',
    },
    
    HeaderTitle: {
        fontSize: 28,
        fontFamily: Roboto.black,
        fontWeight: "800",
        textAlign: "center",
        color: '#000000',
    },

    HeaderBackButton: {
        position: 'absolute',
        left: 10,
        zIndex: 1,
    },

    Icon: {
        width: 25,
        height: 25,
    }
})

export default ScreenHeader;