import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainMealProp } from '@navigation/types';
import FixedScreen from '@components/FixedScreen';
import ScreenHeader from '@components/ScreenHeader';


const MainMealScreen = ({ navigation }: MainMealProp) => {


    return (
        <FixedScreen style={styles.Layout}>
            <ScreenHeader title={"Meal"} backButton={false} />
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

export default MainMealScreen;