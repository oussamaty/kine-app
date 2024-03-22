import { AuthActionTypes } from 'src/redux/types/authTypes';
import { UserActionTypes } from 'src/redux/types/userTypes';

export type ActionTypes =
    | AuthActionTypes
    | UserActionTypes;