import * as React from 'react';
import { View, StyleSheet } from 'react-native';

const ScrollableScreen: React.FC<P> = (Content: React.FC, props: P) => {
    return (
        <View style={styles.Screen}>
            <Content {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    Screen: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: 430,
      height: 1000,
      paddingLeft: 54,
      paddingRight: 55,
      paddingTop: 141,
      paddingBottom: 244,
      borderRadius: 25,
      boxSizing: "border-box",
      backgroundColor: "rgba(255,255,255,1)",
    }
});