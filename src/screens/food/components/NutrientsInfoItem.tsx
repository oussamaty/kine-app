import * as React from 'react';
import { ColorValue, StyleSheet, Text, View } from 'react-native';
import ProgressBar from '@components/ProgressBar';
import { Roboto } from '@theme/font';

type NutrientsInfoItemProps = {
    label: string,
    consumed ?: number,
    target: number,
    unit: string,
    color: ColorValue,
}


const NutrientsInfoItem: React.FC<NutrientsInfoItemProps> = ({ label, consumed, target, unit, color }) => {

    return (
        <View style={styles.Item}>
            <View style={styles.LabelLayout}>
                <Text style={styles.Label}>{label}</Text>
                <Text style={styles.Label}>{ consumed === undefined ? `${target.toFixed(0)} ${unit}`: `${consumed.toFixed(0)} out of ${target.toFixed(0)} ${unit}` }</Text>
            </View>
            <ProgressBar progress={ consumed === undefined ? 75: Math.min(100, (consumed * 100 ) / target) } color={color} style={styles.Bar}/>
        </View>
    );
}

const styles = StyleSheet.create({
    Item: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },

    LabelLayout: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    Label: {
        fontFamily: Roboto.black,
        fontSize: 16,
        lineHeight: 16,
        fontWeight: '500',
        color: '#000',
    },

    Bar: {
        width: '100%',
    }
});

export default NutrientsInfoItem;