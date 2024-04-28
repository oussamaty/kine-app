import * as React from 'react';
import { ColorValue, DimensionValue, StyleSheet, View, ViewStyle } from 'react-native';

type ProgressBarProps = {
    progress: number;
    color?: ColorValue;
    backgroundColor?: ColorValue;
    style?: ViewStyle;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color, backgroundColor, style }) => {
    const width = `${progress}%` as DimensionValue;

    return (
        <View style={[styles.Container, { backgroundColor: backgroundColor ?? "#eee" }, style]}>
            <View style={[styles.Progress, { width, backgroundColor: color ?? "#15F5BA" }]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        padding: 0,
        margin: 0,
        height: 10,
        width: 100,
        borderRadius: 100,
    },

    Progress: {
        height: "100%",
        borderRadius: 100,
    },
});

export default ProgressBar;