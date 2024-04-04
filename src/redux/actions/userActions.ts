import { ThunkAction } from 'redux-thunk';
import { RootState } from 'src/redux/reducers';
import {
  UserActionTypes,
  FETCH_USER_PROFILE,
  Profile
} from '@redux/types/userTypes';

// Synchronous action creators
export const fetchUserProfile = (profile: Profile): UserActionTypes => ({
  type: FETCH_USER_PROFILE,
  payload: profile,
});
