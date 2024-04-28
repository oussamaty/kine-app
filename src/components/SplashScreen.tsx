import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from '@components/Icon';
import KineLogo from '@assets/svg/kine_logo.svg';

type SplashScreenProps = {

}

const SplashScreen:  React.FC<SplashScreenProps> = ({  }) => {
    return (
        <View style={styles.Container}>
            <View style={styles.LogoWrapper}>
                <KineLogo color="#000000" width="100%" height="100%" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
    },

    LogoWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: 150,
        height: 150,
    },

});

export default SplashScreen;