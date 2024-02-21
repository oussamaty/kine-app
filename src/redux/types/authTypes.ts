// State
export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

// Models
export interface User {
    id: number;
    email: string;
    created_at: Date;
    toker: string;
}

// Action Types

// Login
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Logout
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// Signup
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// Action Type Interfaces

// Login
export interface LoginRequestAction {
    type: typeof LOGIN_REQUEST;
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: User;
}

export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE;
    payload: string;
}

// Logout
export interface LogoutRequestAction {
    type: typeof LOGOUT_REQUEST;
}

export interface LogoutSuccessAction {
    type: typeof LOGOUT_SUCCESS;
}

export interface LogoutFailureAction {
    type: typeof LOGOUT_FAILURE;
    payload: string;
}

// Signup
export interface SignupRequestAction {
    type: typeof SIGNUP_REQUEST;
}

export interface SignupSuccessAction {
    type: typeof SIGNUP_SUCCESS;
    payload: User;
}

export interface SignupFailureAction {
    type: typeof SIGNUP_FAILURE;
    payload: string;
}


// All Auth ActionTypes
export type AuthActionTypes = 
    | LoginRequestAction
    | LoginSuccessAction
    | LoginFailureAction
    | LogoutRequestAction
    | LogoutSuccessAction
    | LogoutFailureAction
    | SignupRequestAction
    | SignupSuccessAction
    | SignupFailureAction; 