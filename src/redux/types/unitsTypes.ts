// State
export interface UnitsState {
    heightUnit: 'cm' | 'ft,in';
    weightUnit: 'kg' | 'lb';
    liquidUnit: 'L' | 'fl oz';
    energyUnit: 'cal' | 'kJ';
}

export type UnitsStateKey = keyof UnitsState;

// Actions
export const UPDATE_UNITS_STATE = 'UPDATE_UNITS_STATE';

// Action Type Interfaces
export interface UpdateUnitsState {
    type: typeof UPDATE_UNITS_STATE;
    payload: {
        key: UnitsStateKey,
        value: UnitsState[UnitsStateKey]
    }
}

// All Units ActionTypes
export type UnitsActionTypes =
    | UpdateUnitsState;