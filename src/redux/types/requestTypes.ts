
// State
export interface RequestState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
}

export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const REQUEST_STATE_FLUSH = 'REQUEST_STATE_FLUSH';


export interface StartLoading {
    type: typeof START_LOADING;
}

export interface StopLoading {
    type: typeof STOP_LOADING;
}

export interface RequestSuccess {
    type: typeof REQUEST_SUCCESS;
    payload: boolean;
}

export interface RequestFailure {
    type: typeof REQUEST_FAILURE;
    payload: string;
}

export interface RequestStateFlush {
    type: typeof REQUEST_STATE_FLUSH;
}

export type RequestActionTypes = 
    | StartLoading
    | StopLoading
    | RequestSuccess
    | RequestFailure
    | RequestStateFlush;