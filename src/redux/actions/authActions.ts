import { ThunkAction } from 'redux-thunk';
import { RootState } from '@redux/reducers';
import { RootState } from '@redux/reducers';
import {
  AuthActionTypes,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  REVOKE_TOKEN_SUCCESS,
  REVOKE_TOKEN_FAILURE,
  LOAD_TOKEN_SUCCESS,
  LOAD_TOKEN_FAILURE,
  TokenType,
  AuthResultTypes,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '@redux/types/authTypes';
import {
    loginUserApi,
    logoutUserApi,
    refreshTokenApi,
    saveToken,
    removeToken,
    getToken,
    registerUserApi
} from '@services/auth';
import { AuthorizeResult, RefreshResult } from 'react-native-app-auth';

// Synchronous action creators

// Login
export const loginSuccess = (response: AuthorizeResult): AuthActionTypes => ({
    type: LOGIN_SUCCESS,
    payload: response,
});

export const loginFailure = (error: string): AuthActionTypes => ({
    type: LOGIN_FAILURE,
    payload: error,
});

// Register
export const registerSuccess = (response: AuthorizeResult): AuthActionTypes => ({
    type: REGISTER_SUCCESS,
    payload: response,
});

export const registerFailure = (error: string): AuthActionTypes => ({
    type: REGISTER_FAILURE,
    payload: error,
});

// Logout
export const logoutSuccess = (): AuthActionTypes => ({
    type: LOGOUT_SUCCESS,
});

export const logoutFailure = (error: string): AuthActionTypes => ({
    type: LOGOUT_FAILURE,
    payload: error,
});

// Refresh Token
export const refreshTokenSuccess = (response: RefreshResult): AuthActionTypes => ({
    type: REFRESH_TOKEN_SUCCESS,
    payload: response,
});

export const refreshTokenFailure = (error: string): AuthActionTypes => ({
    type: REFRESH_TOKEN_FAILURE,
    payload: error,
});

// Revoke Token
export const revokeTokenSuccess = (tokenType: TokenType): AuthActionTypes => ({
    type: REVOKE_TOKEN_SUCCESS,
    payload: tokenType,
});

export const revokeTokenFailure = (error: string): AuthActionTypes => ({
    type: REVOKE_TOKEN_FAILURE,
    payload: error,
});

// Load Token
export const loadTokenSuccess = (result: AuthResultTypes ): AuthActionTypes => ({
    type: LOAD_TOKEN_SUCCESS,
    payload: result,
});

export const loadTokenFailure = (error: string): AuthActionTypes => ({
    type: LOAD_TOKEN_FAILURE,
    payload: error,
});

// Asynchronous action creators

// Login
export const loginUser = (): ThunkAction<void, RootState, unknown, AuthActionTypes> => async dispatch => {
    try {
        const response = await loginUserApi();
        await saveToken(response);
        dispatch(loginSuccess(response));
    } catch (error: any) {
        console.log('Login failed:', error);
        dispatch(loginFailure(error.message));
    }
};

// Register
export const registerUser = (): ThunkAction<void, RootState, unknown, AuthActionTypes> => async dispatch => {
    try {
        const response = await registerUserApi();
        await saveToken(response);
        dispatch(registerSuccess(response));
    } catch (error: any) {
        console.log('Register failed:', error.message);
        dispatch(registerFailure(error.message));
    }
}

// Logout
export const logoutUser = (): ThunkAction<void, RootState, unknown, AuthActionTypes> => async (dispatch, getState) => {
    try {
        const idToken = getState().auth.idToken;
        if (!idToken) {
            throw new Error("Id Token is undefined");
        }
        await logoutUserApi(idToken);
        await removeToken();
        dispatch(logoutSuccess());
    } catch (error: any) {
        dispatch(logoutFailure(error.message));
        console.log('Logout failed:', error.message);
    }
};

// Refresh Token
export const refreshToken = (): ThunkAction<void, RootState, unknown, AuthActionTypes> => async (dispatch, getState) => {
    try {
        const token = getState().auth.refreshToken;
        if (!token) {
            throw new Error("Refresh Token is undefined");
        }
        const response = await refreshTokenApi(token);
        await saveToken(response);
        dispatch(refreshTokenSuccess(response));
    } catch (error: any) {
        dispatch(refreshTokenFailure(error.message));
        console.log('Refresh Token failed:', error.message);
    }
};

// Load Token
export const loadToken = (): ThunkAction<void, RootState, unknown, AuthActionTypes> => async dispatch => {
    try {
        const token = await getToken();
        if (!token) {
            throw new Error("Could not find token");
        }
        dispatch(loadTokenSuccess(token));
    } catch (error: any) {
        dispatch(loadTokenFailure(error.message));
        console.log('Load Token failed:', error.message);
    }
};
