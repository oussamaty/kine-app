import { HeightUnit, WeightUnit, EnergyUnit, LiquidUnit } from '@redux/types/userTypes';

// Conversion factors
const CM_TO_FT = 0.0328084;
const FT_TO_CM = 30.48;
const KG_TO_LB = 2.20462;
const LB_TO_KG = 0.453592;
const CAL_TO_KJ = 0.004184;
const KJ_TO_CAL = 239.006;
const L_TO_FL_OZ = 33.814;
const FL_OZ_TO_L = 1 / L_TO_FL_OZ;

// Ensure number is returned with 2 decimal places
const formatToTwoDecimalPlaces = (value: number): number => {
    return parseFloat(value.toFixed(2));
};

export const switchHeightUnit = (unit: HeightUnit): HeightUnit => {
    return unit === HeightUnit.CM ? HeightUnit.FEET : HeightUnit.CM;
};

export const switchWeightUnit = (unit: WeightUnit): WeightUnit => {
    return unit === WeightUnit.KG ? WeightUnit.POUNDS : WeightUnit.KG;
};

export const switchEnergyUnit = (unit: EnergyUnit): EnergyUnit => {
    return unit === EnergyUnit.CAL ? EnergyUnit.KJ : EnergyUnit.CAL;
};

export const switchLiquidUnit = (unit: LiquidUnit): LiquidUnit => {
    return unit === LiquidUnit.L ? LiquidUnit.OZ : LiquidUnit.L;
};

// Conversion functions
export const convertLength = (value: number, fromUnit: HeightUnit, toUnit?: HeightUnit): number => {
    toUnit = toUnit || switchHeightUnit(fromUnit);
    if (fromUnit === HeightUnit.CM && toUnit === HeightUnit.FEET) {
        return formatToTwoDecimalPlaces(value * CM_TO_FT);
    } else if (fromUnit === HeightUnit.FEET && toUnit === HeightUnit.CM) {
        return formatToTwoDecimalPlaces(value * FT_TO_CM);
    }
    return value;
};

export const convertWeight = (value: number, fromUnit: WeightUnit, toUnit?: WeightUnit): number => {
    toUnit = toUnit || switchWeightUnit(fromUnit);
    if (fromUnit === WeightUnit.KG && toUnit === WeightUnit.POUNDS) {
        return formatToTwoDecimalPlaces(value * KG_TO_LB);
    } else if (fromUnit === WeightUnit.POUNDS && toUnit === WeightUnit.KG) {
        return formatToTwoDecimalPlaces(value * LB_TO_KG);
    }
    return value;
};

export const convertEnergy = (value: number, fromUnit: EnergyUnit, toUnit?: EnergyUnit): number => {
    toUnit = toUnit || switchEnergyUnit(fromUnit);
    if (fromUnit === EnergyUnit.CAL && toUnit === EnergyUnit.KJ) {
        return formatToTwoDecimalPlaces(value * CAL_TO_KJ);
    } else if (fromUnit === EnergyUnit.KJ && toUnit === EnergyUnit.CAL) {
        return formatToTwoDecimalPlaces(value * KJ_TO_CAL);
    }
    return value;
};

export const convertLiquid = (value: number, fromUnit: LiquidUnit, toUnit?: LiquidUnit): number => {
    toUnit = toUnit || switchLiquidUnit(fromUnit);
    if (fromUnit === LiquidUnit.L && toUnit === LiquidUnit.OZ) {
        return formatToTwoDecimalPlaces(value * L_TO_FL_OZ);
    } else if (fromUnit === LiquidUnit.OZ && toUnit === LiquidUnit.L) {
        return formatToTwoDecimalPlaces(value * FL_OZ_TO_L);
    }
    return value;
};

