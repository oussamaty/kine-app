import {
  UserActionTypes,
  FETCH_USER_PROFILE,
  UPDATE_WEIGHT_GOAL,
  isWeightGoal,
  UPDATE_WEIGHT_GOAL_FAILED,
} from '@redux/types/userTypes';

// Synchronous action creators
export const fetchUserProfile = (): UserActionTypes => ({
    type: FETCH_USER_PROFILE,
});

export const updateWeightGoal = (id: string): UserActionTypes => {
  if (isWeightGoal(id)) {
    return ({
      type: UPDATE_WEIGHT_GOAL,
      payload: id,
    })
  }
  return {
    type: UPDATE_WEIGHT_GOAL_FAILED,
    payload: "Id provided is not a valid Weight Goal",
  }
};