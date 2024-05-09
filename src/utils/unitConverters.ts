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

// Conversion functions
export const convertLength = (value: number, fromUnit: HeightUnit): number => {
    if (fromUnit === 'cm') {
        return formatToTwoDecimalPlaces(value * CM_TO_FT);
    }
    return formatToTwoDecimalPlaces(value * FT_TO_CM);
};

export const convertWeight = (value: number, fromUnit: WeightUnit): number => {
    if (fromUnit === 'kg') {
        return formatToTwoDecimalPlaces(value * KG_TO_LB);
    }
    return formatToTwoDecimalPlaces(value * LB_TO_KG);
};

export const convertEnergy = (value: number, fromUnit: EnergyUnit): number => {
    if (fromUnit === 'cal') {
        return formatToTwoDecimalPlaces(value * CAL_TO_KJ);
    }
    return formatToTwoDecimalPlaces(value * KJ_TO_CAL);
};

export const convertLiquid = (value: number, fromUnit: LiquidUnit, toUnit: LiquidUnit): number => {
    if (fromUnit === 'L') {
        return formatToTwoDecimalPlaces(value * L_TO_FL_OZ);
    }
    return formatToTwoDecimalPlaces(value * FL_OZ_TO_L);
};

