import * as React from 'react';
import { StyleSheet, View, ViewStyle, Text, TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Roboto } from 'src/theme/font';
import { useNavigation } from '@react-navigation/native';


type IconProps = {
    Source: React.FC<SvgProps>;
    style?: ViewStyle;
    title: string;
    textStyle?: ViewStyle;
    inUse: boolean;
    target: string;
}

const Icon: React.FC<IconProps> = ({ Source, style, title, inUse, target }) => {

    const navigation = useNavigation();
    const onPressHandler = () => {
        navigation.navigate(target);
    };

    return (
        <TouchableOpacity style={styles.IconLayout} onPress={onPressHandler}>
            <View style={[styles.IconWrapper, style]}>
                <Source color="#000000" width="100%" height="100%" />
            </View>
            <Text style={[styles.Text, inUse ? styles.inUseText : null]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    IconLayout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 2,
    },

    IconWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: 25,
        height: 25,
    },

    Text: {
        color: "#ffffff",
        fontSize: 16,
        fontFamily: Roboto.black,
        fontWeight: "700",
        textAlign: "center",
    },

    inUseText: {
        color: "#F7A072",
    }
})

export default Icon;