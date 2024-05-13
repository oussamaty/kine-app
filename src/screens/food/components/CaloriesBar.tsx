import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import CircularProgressBar from '@components/CircularProgressBar';
import { Roboto } from '@theme/font';

type CaloriesBarProps = {
    calories: number;
    progress: number;
    style?: ViewStyle;
};

const CaloriesBar: React.FC<CaloriesBarProps> = ({ calories, progress, style }) => {

    return (
        <View style={[styles.Container, style]}>
            <CircularProgressBar
                progress={progress}
                size={150}
                strokeWidth={16}
                startAngle={-120}
                endAngle={120}
                insideRing={{
                    gap: 12,
                    strokeWidth: 2,
                }}
                />
            <View style={styles.Calories}>
                <Text style={styles.Amount}>{calories.toFixed(0)}</Text>
                <Text style={styles.Unit}>KCAL</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    Calories: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },

    Amount: {
        color: "#211951",
        fontFamily: Roboto.black,
        fontSize: 36,
        fontWeight: '900',
    },

    Unit: {
        color: "#211951",
        fontFamily: Roboto.black,
        fontSize: 18,
        fontWeight: '500',
    }

});

export default CaloriesBar;