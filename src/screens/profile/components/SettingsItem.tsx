import * as React from 'react';
import { useState } from 'react';
import { Text, StyleSheet, Switch, View } from 'react-native';

type SettingsItemProps = {
    content: string,
    unit?: string,

};

const SettingsItem: React.FC<SettingsItemProps> = ({ content, unit }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.layout}>
            <View style={styles.textContainer}>
                <Text style={styles.text}> {content} </Text>
            </View>

            {unit ? (
                <View style={styles.unitContainer}>
                    <Text style={styles.unit}> {unit} </Text>
                </View>
            ) : (
                <View style={[styles.switchContainer]}>
                    <Switch
                        trackColor={{ false: '#ADB5BD', true: '#0FA3B1' }}
                        thumbColor={'#f4f3f4'}
                        onValueChange={toggleSwitch}
                        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                        value={isEnabled}
                    />
                </View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginRight: 40,
    },

    textContainer: {
        flex: 7,
    },

    text: {
        color: "rgba(0,0,0,1)",
        fontSize: 17,
        lineHeight: 24,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
    },

    switchContainer: {
        flex: 3,
        alignItems: 'flex-end',

    },

    unitContainer: {
        flex: 3,
        alignItems: 'flex-end',

    },

    switch: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    },

    unit: {
        color: "#0FA3B1",
        fontSize: 17,
        lineHeight: 24,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
    }
});


export default SettingsItem;