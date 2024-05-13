import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import CircularProgressBar from '@components/CircularProgressBar';
import { Roboto } from '@theme/font';

type StepsProgressProps = {
    steps: number;
    progress: number;
    style?: ViewStyle;
};

const StepsProgress: React.FC<StepsProgressProps> = ({ steps, progress, style }) => {

    return (
        <View style={[styles.Container, style]}>
            <CircularProgressBar
                progress={progress}
                size={120}
                strokeWidth={12}
                startAngle={-90}
                endAngle={270}
                insideRing={{
                    gap: 12,
                    strokeWidth: 2,
                }}
                backgroundColor="#ddd" />
            <View style={styles.Calories}>
                <Text style={styles.Amount}>{steps.toFixed(0)}</Text>
                <Text style={styles.Unit}>Steps</Text>
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
        fontSize: 26,
        fontWeight: '900',
    },

    Unit: {
        color: "#211951",
        fontFamily: Roboto.black,
        fontSize: 14,
        fontWeight: '500',
    }

});

export default StepsProgress;