import * as React from 'react';
import { ColorValue, DimensionValue, StyleSheet, View, ViewStyle } from 'react-native';

type ProgressBarProps = {
    progress: number;
    color?: ColorValue;
    backgroundColor?: ColorValue;
    style?: ViewStyle;
    horizental?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color, backgroundColor, style, horizental }) => {
    const dim = `${progress}%` as DimensionValue;

    return (
        <View style={[styles.Container, { backgroundColor: backgroundColor ?? "#eee" }, style]}>
            <View style={
                    [
                        styles.Progress,
                        horizental ?
                            { height: dim, width: '100%', backgroundColor: color ?? "#15F5BA" } :
                            { width: dim, height: "100%", backgroundColor: color ?? "#15F5BA" }
                    ]
                }></View>
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
        display: 'flex',
        flexDirection: 'column-reverse',
    },

    Progress: {
        borderRadius: 100,
    },
});

export default ProgressBar;