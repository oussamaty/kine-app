import * as React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

type IconProps = {
    Source: React.FC<SvgProps>;
    style?: ViewStyle;
}

const Icon: React.FC<IconProps> = ({ Source, style }) => {
    return (
        <View style={[styles.IconWrapper, style]}>
            <Source color="#000000" width="100%" height="100%" />
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