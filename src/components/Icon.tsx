import * as React from 'react';
import { ColorValue, StyleSheet, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

type IconProps = {
    Source: React.FC<SvgProps>;
    fill?: ColorValue;
    style?: ViewStyle;
}

const Icon: React.FC<IconProps> = ({ Source, fill, style }) => {
    return (
        <View style={[styles.IconWrapper, style]}>
            <Source fill={fill ?? "#000"} width="100%" height="100%" />
        </View>
    )
}

const styles = StyleSheet.create({
    IconWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: 25,
        height: 25,
    }
})

export default Icon;