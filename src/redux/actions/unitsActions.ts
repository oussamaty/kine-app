import {
    UnitsActionTypes,
    UnitsStateKey,
    UnitsState,
    UPDATE_UNITS_STATE,
} from '@redux/types/unitsTypes';

// Synchronous action creators
export const updateUnitsState = (key: UnitsStateKey, value: UnitsState[UnitsStateKey]): UnitsActionTypes => {
    return {
        type: UPDATE_UNITS_STATE,
        payload: {
            key: key,
            value: value
        }
    }
}