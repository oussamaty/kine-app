import * as React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useAppSelector } from '@hooks/index';
import { useAppDispatch } from '@hooks/index';
import { persistor } from '@redux/store';
import { convertEnergy, convertLength, convertWeight, switchEnergyUnit, switchHeightUnit, switchLiquidUnit, switchWeightUnit } from '@utils/unitConverters';
import { updateUserState } from '@redux/actions/userActions';
import { EnergyUnit, HeightUnit, LiquidUnit, WeightUnit } from '@redux/types/userTypes';

type UnitKeys = 'heightUnit' | 'weightUnit' | 'liquidUnit' | 'energyUnit';

type UnitSelectorProps = {
    unitType: UnitKeys;
};

const unitTypeTextMap: { [key in UnitKeys]: string } = {
    heightUnit: 'Height Unit',
    weightUnit: 'Weight Unit',
    energyUnit: 'Energy Unit',
    liquidUnit: 'Liquid Unit',
};

const UnitSelector: React.FC<UnitSelectorProps> = ({ unitType }) => {

    const unit = useAppSelector(state => state.user[unitType]);
    const displayText = unitTypeTextMap[unitType];

    const dispatch = useAppDispatch();

    let initialHeight: number | undefined;
    let initialWeight: number | undefined;
    let initialTarget: number | undefined;
    let initialTDEE: number | undefined;
    let initialCalories: number | undefined;

    switch (unitType) {
        case 'heightUnit':
            initialHeight = useAppSelector(state => state.user.heightToDisplay) ?? undefined;
            break;
        case 'weightUnit':
            initialWeight = useAppSelector(state => state.user.weightToDisplay) ?? undefined;
            initialTarget = useAppSelector(state => state.user.targetToDisplay) ?? undefined;
            break;
        case 'energyUnit':
            initialTDEE = useAppSelector(state => state.user.tdeeToDisplay) ?? undefined;
            initialCalories = useAppSelector(state => state.user.caloriesToDisplay) ?? undefined;
            break;
    }


    const changeUnit = () => {
        switch (unitType) {
            case 'heightUnit':
                dispatch(updateUserState("heightToDisplay", convertLength(initialHeight as number, unit as HeightUnit)));
                dispatch(updateUserState(unitType, switchHeightUnit(unit as HeightUnit)));
                break;
            case 'weightUnit':
                dispatch(updateUserState("weightToDisplay", convertWeight(initialWeight as number, unit as WeightUnit)));
                dispatch(updateUserState("targetToDisplay", convertWeight(initialTarget as number, unit as WeightUnit)));
                dispatch(updateUserState(unitType, switchWeightUnit(unit as WeightUnit)));
                break;
            case 'energyUnit':
                dispatch(updateUserState("tdeeToDisplay", convertEnergy(initialTDEE as number, unit as EnergyUnit)));
                dispatch(updateUserState("caloriesToDisplay", convertEnergy(initialCalories as number, unit as EnergyUnit)));
                dispatch(updateUserState(unitType, switchEnergyUnit(unit as EnergyUnit)));
                break;
            case 'liquidUnit':
                dispatch(updateUserState(unitType, switchLiquidUnit(unit as LiquidUnit)));
                break;

        }
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