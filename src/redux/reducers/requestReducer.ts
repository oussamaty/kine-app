import { REQUEST_FAILURE, REQUEST_STATE_FLUSH, REQUEST_SUCCESS, RequestActionTypes, RequestState, START_LOADING, STOP_LOADING } from "@redux/types/requestTypes";

const initialState: RequestState = {
    loading: false,
    error: undefined,
    success: false,
}

export const requestReducer = (state = initialState, action: RequestActionTypes) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true,
            };
        case STOP_LOADING:
            return {
                ...state,
                loading: false,
            };
        case REQUEST_SUCCESS:
            return {
                loading: false,
                error: undefined,
                success: true,
            };
        case REQUEST_FAILURE:
            return {
                loading: false,
                error: action.payload,
                success: false,
            };
        case REQUEST_STATE_FLUSH:
            return initialState;
        default:
            return state;
    }
};