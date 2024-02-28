import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface FixedScreenProps {
  children: ReactNode;
  style?: ViewStyle;
}

const FixedScreen: React.FC<FixedScreenProps> = ({ children, style, ...otherProps }) => {
  return (
    <View style={[styles.Screen, style]} {...otherProps}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
    Screen: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: 430,
      height: 1000,
      padding: 25,
      borderRadius: 25,
      backgroundColor: "#ffffff",
    }
});

export default FixedScreen;