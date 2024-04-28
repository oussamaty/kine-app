import {
  UserActionTypes,
  UserStateKey,
  UserState,
  UPDATE_USER_STATE,
} from '@redux/types/userTypes';
import { ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '@redux/reducers';
import { calculatTDEEApi } from '@services/user';

// Asynchronous action creators
export const calculateTDEE = (): ThunkAction<void, RootState, unknown, UserActionTypes> => async (dispatch, state) => {
  try {
      const response = await calculatTDEEApi(state().user);
      const { bmr, tdee, target } = response.data;
      dispatch(updateUserState('bmr', Math.floor(bmr)));
      dispatch(updateUserState('tdee', Math.floor(tdee)));
      dispatch(updateUserState('calories', Math.floor(target)));
  } catch (error: any) {
      console.log('Calculation failed:', error);
      dispatch(updateUserState('error', error.message));
  }
};

// Synchronous action creators
export const updateUserState = (key: UserStateKey, value: UserState[UserStateKey]): UserActionTypes => {
  return {
    type: UPDATE_USER_STATE,
    payload: {
      key: key,
      value: value
    }
  }
}