import { ThunkAction } from 'redux-thunk';
import { RootState } from '@redux/reducers';
import {
  AuthActionTypes,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  User
} from 'redux/types/authTypes';
import { fetchUserProfile } from 'redux/actions/userActions.ts';

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
        const [user, profile]: [User, Profile] = await loginUserApi(email, password);
        dispatch(loginSuccess(user));
        dispatch(fetchUserProfile(profile));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
};

// Logout
export const logoutUser = (): ThunkAction<void, RootState, unknown, AuthActionTypes> => async dispatch => {
    dispatch(logoutRequest());
    try {
        await logoutUserApi();
        dispatch(logoutSuccess());
    } catch (error) {
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
        const user: User = await signupUserApi(email, password);
        dispatch(signupSuccess(user));
    } catch (error) {
        dispatch(signupFailure(error.message));
    }
};