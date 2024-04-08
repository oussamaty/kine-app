import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainActivityProp } from '@navigation/types';
import FixedScreen from '@components/FixedScreen';
import ScreenHeader from '@components/ScreenHeader';


const MainActivityScreen = ({ navigation }: MainActivityProp) => {


    return (
        <FixedScreen style={styles.Layout}>
            <ScreenHeader title={"Activity"} backButton={false} />
        </FixedScreen>
    )
};

const styles = StyleSheet.create({

    Layout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        padding: 0,
        gap: 30,
        paddingTop: 16,
    },

});

export default MainActivityScreen;