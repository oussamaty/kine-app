import * as React from 'react';
import { StyleSheet, View, Button } from "react-native";

type InputsListProps = {

}

const InputsList: React.FC<InputsListProps> = ({  }) => {
    return (
        <View style={styles.Container}>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        gap: 16,
    },


});

export default InputsList;