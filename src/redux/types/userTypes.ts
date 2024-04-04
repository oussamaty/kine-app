import  { Gender } from '@constants/enums';

// State
export interface UserState {
    id: number | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    birthDate: Date | null;
    gender: Gender | null;
    height: number | null;
    weight: number | null;
    target: number | null;
    goal: WeightGoal | null;
}

export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';
export const UPDATE_WEIGHT_GOAL = 'UPDATE_WEIGHT_GOAL';
export const UPDATE_WEIGHT_GOAL_FAILED = 'UPDATE_WEIGHT_GOAL_FAILED';

export type WeightGoal = 'lose_weight' | 'maintain_weight' | 'gain_weight';

export const isWeightGoal = (value: string): value is WeightGoal => {
    return ['lose_weight', 'maintain_weight', 'gain_weight'].includes(value as WeightGoal);
}

export interface FetchUserProfileAction {
    type: typeof FETCH_USER_PROFILE;
}

export interface UpdateWeightGoalAction {
    type: typeof UPDATE_WEIGHT_GOAL;
    payload: WeightGoal;
}

export interface UpdateWeightGoalFailedAction {
    type: typeof UPDATE_WEIGHT_GOAL_FAILED;
    payload: string;
}

export type UserActionTypes = 
    | FetchUserProfileAction
    | UpdateWeightGoalAction
    | UpdateWeightGoalFailedAction;