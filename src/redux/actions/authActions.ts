import { ThunkAction } from 'redux-thunk';
import { RootState } from 'src/redux/reducers';
import {
    AuthActionTypes,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    User,
    LOGIN_REQUEST,
    LOGOUT_REQUEST,
    SIGNUP_REQUEST
} from 'src/redux/types/authTypes';

import { fetchUserProfile } from './userActions.ts';
import { Profile } from '../types/userTypes';
import { loginApi, logoutUserApi, signupApi } from 'src/services/auth';
import { AxiosResponse, AxiosError } from 'axios';
import { useAppDispatch } from 'src/hooks';

// Synchronous action creators

// Login
export const loginRequest = (): AuthActionTypes => ({
    type: LOGIN_REQUEST,
});

export const loginSuccess = (user: User): AuthActionTypes => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error: string): AuthActionTypes => ({
    type: LOGIN_FAILURE,
    payload: error,
});

// Logout
export const logoutRequest = (): AuthActionTypes => ({
    type: LOGOUT_REQUEST,
});

export const logoutSuccess = (): AuthActionTypes => ({
    type: LOGOUT_SUCCESS,
});

export const logoutFailure = (error: string): AuthActionTypes => ({
    type: LOGOUT_FAILURE,
    payload: error,
});

// Signup
export const signupRequest = (): AuthActionTypes => ({
    type: SIGNUP_REQUEST,
});

export const signupSuccess = (user: User): AuthActionTypes => ({
    type: SIGNUP_SUCCESS,
    payload: user,
});

export const signupFailure = (error: string): AuthActionTypes => ({
    type: SIGNUP_FAILURE,
    payload: error,
});


// Asynchronous action creators

// Login
export const loginUser = (
    email: string,
    password: string
): ThunkAction<void, RootState, unknown, AuthActionTypes> => async dispatch => {
    dispatch(loginRequest());
    try {
        const loginUserresponse: AxiosResponse<any> = await loginApi({ email: email, password: password });
        const user: User = loginUserresponse.data.user;
        const profile: Profile = loginUserresponse.data.profile;

        const dispatch = useAppDispatch()
        dispatch(loginSuccess(user));

        dispatch(fetchUserProfile(profile));
    } catch (error: any) {
        dispatch(loginFailure(error.message));
    }
};

// Logout
export const logoutUser = (): ThunkAction<void, RootState, unknown, AuthActionTypes> => async dispatch => {
    dispatch(logoutRequest());
    try {
        await logoutUserApi();
        dispatch(logoutSuccess());
    } catch (error: any) {
        dispatch(logoutFailure(error.message));
    }
};

// Signup
export const signupUser = (
    email: string,
    password: string
): ThunkAction<void, RootState, unknown, AuthActionTypes> => async dispatch => {
    dispatch(signupRequest());
    try {
        const signupUserresponse: AxiosResponse<any> = await signupApi({ email: email, password: password })
        const user: User = signupUserresponse.data.user;
        dispatch(signupSuccess(user));
    } catch (error: any) {
        dispatch(signupFailure(error.message));
    }
};