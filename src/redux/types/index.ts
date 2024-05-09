import { AuthActionTypes } from '@redux/types/authTypes';
import { UserActionTypes } from '@redux/types/userTypes';
import { LoadingActionTypes } from '@redux/types/loadingTypes';


export type ActionTypes =
    | AuthActionTypes
    | UserActionTypes
    | LoadingActionTypes