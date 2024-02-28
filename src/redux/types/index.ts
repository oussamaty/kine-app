import { AuthActionTypes } from '@redux/types/authTypes';
import { UserActionTypes } from '@redux/types/userTypes';

export type ActionTypes = 
    | AuthActionTypes
    | UserActionTypes;