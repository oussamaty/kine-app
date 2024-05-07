import {
    UnitsState,
    UnitsActionTypes,
    UPDATE_UNITS_STATE,
} from '@redux/types/unitsTypes';

const initialState: UnitsState = {
    heightUnit: 'cm',
    weightUnit: 'kg',
    liquidUnit: 'L',
    energyUnit: 'cal',
};

export const unitsReducer = (state = initialState, action: UnitsActionTypes): UnitsState => {
    switch (action.type) {
        case UPDATE_UNITS_STATE:
            return {
                ...state,
                [action.payload.key]: action.payload.value
            };

        default:
            return state;
    }
};
