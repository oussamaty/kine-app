
export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';


export interface ShowLoading {
    type: typeof SHOW_LOADING;
    payload: boolean
}

export interface HideLoading {
    type: typeof HIDE_LOADING;
    payload: boolean
}

export type LoadingActionTypes = 
    | ShowLoading
    | HideLoading;