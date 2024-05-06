import { Gender } from '@constants/enums';

// State
export interface UserState {
    id: number | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    birthDate: string | null;
    gender: Gender | null;
    height: number | null;
    weight: number | null;
    target: number | null;
    goal: UserWeightGoalKey | null;
    activity: UserActivityLevelKey | null;
    targetDate: string | null;
    bmr: number | null;
    tdee: number | null;
    calories: number | null;
    error: string | null;
    profilePicture: { uri: string | undefined; } | null;
}

export enum UserWeightGoal {
    lose_weight = 'Lose Weight',
    maintain_weight = 'Maintain Weight',
    gain_weight = 'Gain Weight',
};
export enum UserActivityLevel {
    sedentary = 'Sedentary',
    moderate = 'Moderately Active',
    active = 'Very Active',
};

export type UserStateKey = keyof UserState;

export type UserWeightGoalKey = keyof typeof UserWeightGoal;

export type UserActivityLevelKey = keyof typeof UserActivityLevel;

export const UPDATE_USER_STATE = 'UPDATE_USER_STATE';

export interface UpdateUserState {
    type: typeof UPDATE_USER_STATE;
    payload: {
        key: UserStateKey,
        value: UserState[UserStateKey]
    }
}

export type UserActionTypes =
    | UpdateUserState;