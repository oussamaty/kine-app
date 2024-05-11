import * as React from 'react';
import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native';

type LoadingProps = {
    style?: ViewStyle;
};

const Loading: React.FC<LoadingProps> = ({ style }) => {

    return (
        <View style={[styles.Container, style]}>
            <ActivityIndicator style={styles.Loading} size='large' color="#0000ff" />
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    Loading: {
        
    }
});

export default Loading;