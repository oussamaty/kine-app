import  { Gender } from '../../constants/enums';

// State
export interface UserState {
    profile: Profile | null;
}

// Models
export interface Profile {
    id: number;
    email: string;
    name: string;
    birthDate: Date;
    gender: Gender;
    height: number;
    weight: number;
    target: number;
}

export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';

export interface FetchUserProfileAction {
    type: typeof FETCH_USER_PROFILE;
}

export type UserActionTypes = 
    | FetchUserProfileAction;