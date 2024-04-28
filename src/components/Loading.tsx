import * as React from 'react';
import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native';

type LoadingProps = {
    style?: ViewStyle;
};

const Loading: React.FC<LoadingProps> = ({ style }) => {

    return (
        <View style={[styles.Container, style]}>
            <ActivityIndicator style={styles.Loading} size="large" color="#0000ff" />
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    Loading: {
        width: 50,
        height: 50,
    }
});

export default Loading;