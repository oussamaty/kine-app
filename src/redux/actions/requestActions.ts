import {
    REQUEST_FAILURE,
    REQUEST_STATE_FLUSH,
    REQUEST_SUCCESS,
    RequestActionTypes,
    START_LOADING,
    STOP_LOADING,
  } from '@redux/types/requestTypes';
  
// Synchronous action creators
export const startLoading = (): RequestActionTypes => {
    return {
        type: START_LOADING,
    }
}

export const stopLoading = (): RequestActionTypes => {
    return {
        type: STOP_LOADING,
    }
}

export const requestSuccess = (success: boolean): RequestActionTypes => {
    return {
        type: REQUEST_SUCCESS,
        payload: success,
    }
}

export const requestFailure = (error: string): RequestActionTypes => {
    return {
        type: REQUEST_FAILURE,
        payload: error,
    }
}

export const requestStateFlush = (): RequestActionTypes => {
    return {
        type: REQUEST_STATE_FLUSH,
    }
}