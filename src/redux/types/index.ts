import { AuthActionTypes } from './authTypes';
import { UserActionTypes } from './userTypes';

export type ActionTypes = 
    | AuthActionTypes
    | UserActionTypes;