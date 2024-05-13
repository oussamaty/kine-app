import * as React from 'react';
import { StyleSheet, View, ViewStyle, Text } from 'react-native';
import ProgressBar from '@components/ProgressBar';
import { Roboto } from '@theme/font';

type NutrientProgressProps = {
    label: string;
    progress: number;
    amount: number;
    unit: string;
    style?: ViewStyle;
};

const NutrientProgress: React.FC<NutrientProgressProps> = ({ label, progress, amount, unit, style }) => {

    return (
        <View style={[styles.Container, style]}>
            <Text style={styles.Amount}>{ `${amount.toFixed(0)} ${unit}` }</Text>
            <ProgressBar progress={progress} style={styles.ProgressBar} />
            <Text style={styles.Label}>{label}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
    },

    Amount: {
        fontFamily: Roboto.black,
        fontSize: 16,
        fontWeight: '700',
        color: "#211951"
    },

    ProgressBar: {
        width: '100%',
    },

    Label: {
        fontFamily: Roboto.black,
        fontSize: 16,
        fontWeight: '300',
        color: '#211951',
    },
});

export default NutrientProgress;