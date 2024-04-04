import { AuthorizeResult, RefreshResult } from "react-native-app-auth";

// State
export interface AuthState {
    isAuthenticated: boolean;
    accessToken: string | null;
    accessTokenExpirationDate: string | null;
    idToken: string | null;
    refreshToken: string | null;
    tokenType: string | null;
    additionalParameters: Record<string, unknown>;
    authorizeAdditionalParameters: Record<string, unknown>;
    isFailure: boolean;
    errorMessage: string | null;
}

export enum TokenType {
    ACCESS, REFRESH
}

// Action Types

// Login
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Register
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// Logout
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// Refresh Token
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILURE = 'REFRESH_TOKEN_FAILURE';

// Revoke Token
export const REVOKE_TOKEN_SUCCESS = 'REVOKE_TOKEN_SUCCESS';
export const REVOKE_TOKEN_FAILURE = 'REVOKE_TOKEN_FAILURE';

// Load Token
export const LOAD_TOKEN_SUCCESS = 'LOAD_TOKEN_SUCCESS';
export const LOAD_TOKEN_FAILURE = 'LOAD_TOKEN_FAILURE';


// Action Type Interfaces

// Login
export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS;
    payload: AuthorizeResult;
}

export interface LoginFailureAction {
    type: typeof LOGIN_FAILURE;
    payload: string;
}

// Register
export interface RegisterSuccessAction {
    type: typeof REGISTER_SUCCESS;
    payload: AuthorizeResult;
}

export interface RegisterFailureAction {
    type: typeof REGISTER_FAILURE;
    payload: string;
}

// Logout
export interface LogoutSuccessAction {
    type: typeof LOGOUT_SUCCESS;
}

export interface LogoutFailureAction {
    type: typeof LOGOUT_FAILURE;
    payload: string;
}

// Refresh Token
export interface RefreshTokenSuccessAction {
    type: typeof REFRESH_TOKEN_SUCCESS;
    payload: RefreshResult;
}

export interface RefreshTokenFailureAction {
    type: typeof REFRESH_TOKEN_FAILURE;
    payload: string;
}

// Revoke Token
export interface RevokeTokenSuccessAction {
    type: typeof REVOKE_TOKEN_SUCCESS;
    payload: TokenType;
}

export interface RevokeTokenFailureAction {
    type: typeof REVOKE_TOKEN_FAILURE;
    payload: string;
}

// Revoke Token
export interface LoadTokenSuccessAction {
    type: typeof LOAD_TOKEN_SUCCESS;
    payload: AuthResultTypes;
}

export interface LoadTokenFailureAction {
    type: typeof LOAD_TOKEN_FAILURE;
    payload: string;
}



// All Auth ActionTypes
export type AuthActionTypes = 
    | LoginSuccessAction
    | LoginFailureAction
    | RegisterSuccessAction
    | RegisterFailureAction
    | LogoutSuccessAction
    | LogoutFailureAction
    | RefreshTokenSuccessAction
    | RefreshTokenFailureAction
    | RevokeTokenSuccessAction
    | RevokeTokenFailureAction
    | LoadTokenSuccessAction
    | LoadTokenFailureAction; 

// All Auth Result Types
export type AuthResultTypes = 
    | AuthorizeResult
    | RefreshResult;