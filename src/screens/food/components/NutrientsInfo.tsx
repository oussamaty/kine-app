import * as React from 'react';
import { ColorValue, StyleSheet, Text, View, ViewStyle } from 'react-native';
import ProgressBar from '@components/ProgressBar';
import { Roboto } from '@theme/font';

type NutrientsInfoProps = {
    title: string;
    nutrients: Array<{
        label: string,
        consumed: number,
        target: number,
        unit: string,
        color: ColorValue,
    }>;
    style?: ViewStyle;
};

const NutrientsInfo: React.FC<NutrientsInfoProps> = ({ title, nutrients, style }) => {

    return (
        <View style={[styles.Container, style]}>
            <Text style={styles.Title}>{title}</Text>
            <View style={styles.Nutrients}>
                {
                    nutrients.map(({ label, consumed, target, unit, color }, index) => (
                        <View key={index} style={styles.Item}>
                            <View style={styles.LabelLayout}>
                                <Text style={styles.Label}>{label}</Text>
                                <Text style={styles.Label}>{ consumed !== 0 ? `${consumed} out of ${target} ${unit}`: `${target} ${unit}` }</Text>
                            </View>
                            <ProgressBar progress={ consumed !== 0 ? (consumed * 100 ) / target: 75 } color={color} style={styles.Bar}/>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
    },

    Title: {
        fontFamily: Roboto.black,
        fontSize: 28,
        lineHeight: 28,
        fontWeight: '900',
        color: '#000',
    },

    Nutrients: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
    },

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

export default NutrientsInfo;