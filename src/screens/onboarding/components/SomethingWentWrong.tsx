import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import Icon from '@components/Icon';
import { Roboto } from '@theme/font';
import Ghost from '@assets/icons/ghost.svg';

type SomethingWentWrongProps = {
    style?: ViewStyle;
}

const SomethingWentWrong: React.FC<SomethingWentWrongProps> = () => {
    return (
        <View style={styles.Content}>
            <Icon Source={Ghost} style={styles.Ghost}/>
            <Text style={styles.Title}>
                Something Went wrong
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        paddingTop: 16,
      },
    
    Ghost: {
        width: 100,
        height: 100,
        marginVertical: 50,
    },

    Title: {
        color: '#000000',
        fontFamily: Roboto.black,
        fontWeight: '800',
        fontSize: 26,
    },
})

export default SomethingWentWrong;