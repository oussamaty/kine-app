import React, { ReactNode } from 'react';
import { StyleSheet, ViewStyle, SafeAreaView } from 'react-native';

type FixedScreenProps = {
  children: ReactNode;
  style?: ViewStyle;
}

const FixedScreen: React.FC<FixedScreenProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.Screen, style]} >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    Screen: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      width: '100%',
      height: '100%',
      padding: 30,
      backgroundColor: "#ffffff",
    }
});

export default FixedScreen;