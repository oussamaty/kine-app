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
    profilePicture: string | undefined;
    heightUnit: HeightUnit;
    weightUnit: WeightUnit;
    liquidUnit: LiquidUnit;
    energyUnit: EnergyUnit;
    heightToDisplay: number | null;
    weightToDisplay: number | null;
    targetToDisplay: number | null;
    tdeeToDisplay: number | null;
    caloriesToDisplay: number | null;
}

// Enums
export enum UserWeightGoal {
    lose_weight = 'Lose Weight',
    maintain_weight = 'Maintain Weight',
    gain_weight = 'Gain Weight',
};
export enum UserActivityLevel {
    SEDENTARY = 'Sedentary',
    MODERATELY_ACTIVE = 'Moderately Active',
    VERY_ACTIVE = 'Very Active',
};
export enum HeightUnit {
    CM = "cm",
    FEET = "ft"
};
export enum WeightUnit {
    KG = "kg",
    POUNDS = "lbs"
};
export enum LiquidUnit {
    L = "L",
    OZ = "fl oz"
};
export enum EnergyUnit {
    CAL = "cal",
    KJ = "kJ"
};

export type UserStateKey = keyof UserState;

export type UserWeightGoalKey = keyof typeof UserWeightGoal;

export type UserActivityLevelKey = keyof typeof UserActivityLevel;

export const UPDATE_USER_STATE = 'UPDATE_USER_STATE';

export const PURGE_USER_STATE = 'PURGE_USER_STATE';

export interface UpdateUserState {
    type: typeof UPDATE_USER_STATE;
    payload: {
        key: UserStateKey,
        value: UserState[UserStateKey]
    }
}

export interface PurgeUserState {
    type: typeof PURGE_USER_STATE;
}

export type UserActionTypes =
    | UpdateUserState
    | PurgeUserState;