import { LoadingActionTypes } from "@redux/types/loadingTypes";

export const loadingReducer = (state = false, action: LoadingActionTypes) => {
    switch (action.type) {
        case 'SHOW_LOADING':
            return true;
        case 'HIDE_LOADING':
            return false;
        default:
            return state;
    }
};