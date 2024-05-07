import * as React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { UnitsState, UnitsStateKey } from '@redux/types/unitsTypes';
import { useAppSelector } from '@hooks/index';
import { useAppDispatch } from '@hooks/index';
import { updateUnitsState } from '@redux/actions/unitsActions';
import { persistor } from '@redux/store';
import { convertLength, convertWeight } from '@utils/unitConverters';
import { updateUserState } from '@redux/actions/userActions';

type UnitSelectorProps = {
    content: UnitsStateKey,
};

const contentTextMap: { [key in UnitsStateKey]: string } = {
    heightUnit: 'Height Unit',
    weightUnit: 'Weight Unit',
    energyUnit: 'Energy Unit',
    liquidUnit: 'Liquid Unit',
};

const UnitSelector: React.FC<UnitSelectorProps> = ({ content }) => {

    const unit = useAppSelector(state => state.units[content]);
    const displayText = contentTextMap[content];
    const dispatch = useAppDispatch();
    const initialHeight = useAppSelector(state => state.user.height) ?? undefined;
    const initialWeight = useAppSelector(state => state.user.weight) ?? undefined;

    const switchUnit = (content: UnitsStateKey, unit: string): UnitsState[UnitsStateKey] => {
        switch (content) {
            case 'heightUnit':
                return unit === 'cm' ? 'ft,in' : 'cm';
            case 'weightUnit':
                return unit === 'kg' ? 'lb' : 'kg';
            case 'energyUnit':
                return unit === 'cal' ? 'kJ' : 'cal';
            case 'liquidUnit':
                return unit === 'L' ? 'fl oz' : 'L';
            default:
                throw new Error(`Unknown content category: ${content}`);
        }
    };

    const changeUnit = () => {
        switch (content) {
            case 'heightUnit':
                dispatch(updateUserState("height", convertLength(initialHeight as number, unit)));
                break;
            case 'weightUnit':
                dispatch(updateUserState("weight", convertWeight(initialWeight as number, unit)));
                break;
        }
        dispatch(updateUnitsState(content, switchUnit(content, unit)));
        setTimeout(() => { persistor.persist() }, 100);
    }

    return (
        <View style={styles.layout}>
            <View style={styles.textContainer}>
                <Text style={styles.text}> {displayText} </Text>
            </View>
            <TouchableOpacity style={styles.unitContainer} onPress={changeUnit}>
                <Text style={styles.unit}> {unit} </Text>
            </TouchableOpacity>
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

    unitContainer: {
        flex: 3,
        alignItems: 'flex-end',

    },

    unit: {
        color: "#0FA3B1",
        fontSize: 17,
        lineHeight: 24,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
    }
});


export default UnitSelector;