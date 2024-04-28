import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Roboto } from '@theme/font';

type TabListProps = {
    tabs: Array<{
        id: string,
        label: string
    }>;
    onPress: (id: string) => void;
    initialTab?: number
    style?: ViewStyle;
};

const TabList: React.FC<TabListProps> = ({ tabs, onPress, initialTab, style }) => {

    const [active, setActive] = useState<number>(initialTab ?? 0);

    const handlePress = (id: string, index: number) => {
        setActive(index);
        onPress(id);
    };

    return (
        <View style={[styles.Container, style]}>
            {
                tabs.map(({ id, label }, index) => (
                    <TouchableOpacity key={index} style={styles.Button} onPress={() => handlePress(id, index)}>
                        <Text style={[styles.Label, active === index ? styles.ActiveLabel: styles.InactiveLabel]}>{label}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 0,
        padding: 0,
    },

    Button: {

    },

    Label: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: Roboto.black,
        fontSize: 20,
        fontWeight: '500',
        color: '#666',
    },

    ActiveLabel: {
        fontWeight: '800',
        color: '#211951',
    },

    InactiveLabel: {

    }
});

export default TabList;