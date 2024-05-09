import * as React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useAppSelector } from '@hooks/index';
import { useAppDispatch } from '@hooks/index';
import { persistor } from '@redux/store';
import { convertEnergy, convertLength, convertWeight } from '@utils/unitConverters';
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
    const initialHeight = useAppSelector(state => state.user.heightToDisplay) ?? undefined;
    const initialWeight = useAppSelector(state => state.user.weightToDisplay) ?? undefined;
    const initialTDEE = useAppSelector(state => state.user.tdeeToDisplay) ?? undefined;
    const initialCalories = useAppSelector(state => state.user.caloriesToDisplay) ?? undefined;
    const initialTarget = useAppSelector(state => state.user.targetToDisplay) ?? undefined;

    function switchHeightUnit(unit: HeightUnit): HeightUnit {
        return unit === HeightUnit.CM ? HeightUnit.FEET : HeightUnit.CM;
    }

    function switchWeightUnit(unit: WeightUnit): WeightUnit {
        return unit === WeightUnit.KG ? WeightUnit.POUNDS : WeightUnit.KG;
    }

    function switchEnergyUnit(unit: EnergyUnit): EnergyUnit {
        return unit === EnergyUnit.CAL ? EnergyUnit.KJ : EnergyUnit.CAL;
    }

    function switchLiquidUnit(unit: LiquidUnit): LiquidUnit {
        return unit === LiquidUnit.L ? LiquidUnit.OZ : LiquidUnit.L;
    }

    const changeUnit = () => {
        switch (unitType) {
            case 'heightUnit':
                dispatch(updateUserState("height", convertLength(initialHeight as number, unit)));
                dispatch(updateUserState(unitType, switchHeightUnit(unit as HeightUnit)));
                break;
            case 'weightUnit':
                dispatch(updateUserState("weight", convertWeight(initialWeight as number, unit)));
                dispatch(updateUserState("target", convertWeight(initialTarget as number, unit)));
                dispatch(updateUserState(unitType, switchWeightUnit(unit as WeightUnit)));
                break;
            case 'energyUnit':
                dispatch(updateUserState("tdee", convertEnergy(initialTDEE as number, unit)));
                dispatch(updateUserState("tdee", convertEnergy(initialCalories as number, unit)));
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