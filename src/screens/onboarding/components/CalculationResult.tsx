import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Roboto } from '@theme/font';
import { useAppSelector } from 'src/hooks';

type ItemProps = {
    label: string;
    value: number;
    unit: string;
    style?: ViewStyle;
}

const Item: React.FC<ItemProps> = ({ label, value, unit, style }) => {

    return (
        <View style={[styles.Item, style]}>
            <Text style={styles.Label}>{label}</Text>
            <View style={styles.Measure}>
                <Text style={styles.Value}>{value}</Text>
                <Text style={styles.Unit}>{unit}</Text>
            </View>
        </View>
    )
}

type CalculationResultProps = {
    style?: ViewStyle;
}

const CalculationResult: React.FC<CalculationResultProps> = ({ style }) => {

    const bmr = useAppSelector(state => state.user.bmr);
    const tdee = useAppSelector(state => state.user.tdee);
    const calories = useAppSelector(state => state.user.calories);

    return (
        <View style={[styles.Content, style]}>
            <Text style={styles.Title}>Are You Ready ?</Text>
            <View style={styles.Container}>
                <Item key="bmr" label="Your BMR" value={bmr ?? 0} unit="kcal" />
                <Item key="dac" label="Your TDEE" value={tdee ?? 0} unit="kcal" />
                <Item key="tdc" label="Your Target Daily Calories" value={calories ?? 0} unit="kcal" />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    Content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        width: '100%',
        paddingTop: 16,
    },

    Title: {
        color: '#000000',
        fontFamily: Roboto.black,
        fontWeight: '800',
        fontSize: 26,
    },

    Container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        margin: 0,
        gap: 30,
        paddingTop: 20,
    },

    Item: {
        width: '100%',
        height: 90,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },

    Label: {
        fontFamily: Roboto.black,
        fontSize: 16,
        paddingHorizontal: 10,
        fontWeight: '700',
        color: '#000',
    },

    Measure: {
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 8,
    },

    Value: {
        flex: 5,
        height: '100%',
        fontFamily: Roboto.black,
        fontSize: 21,
        fontWeight: '500',
        color: '#000',
        textAlignVertical: 'center',
        paddingHorizontal: 15,
    },

    Unit: {
        flex: 1,
        height: '100%',
        fontFamily: Roboto.black,
        fontSize: 16,
        color: '#777',
        borderLeftWidth: 1,
        borderColor: '#777',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

export default CalculationResult;