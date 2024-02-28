import { ThunkAction } from 'redux-thunk';
import { RootState } from '@redux/reducers';
import {
  UserActionTypes,
  FETCH_USER_PROFILE,
  Profile
} from 'redux/types/userTypes';

// Synchronous action creators
export const fetchUserProfile = (): UserActionTypes => ({
    type: FETCH_USER_PROFILE,
});