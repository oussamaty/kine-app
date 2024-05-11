import { AuthActionTypes } from '@redux/types/authTypes';
import { UserActionTypes } from '@redux/types/userTypes';
import { RequestActionTypes } from '@redux/types/requestTypes';


export type ActionTypes =
    | AuthActionTypes
    | UserActionTypes
    | RequestActionTypes;