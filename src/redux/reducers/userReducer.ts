import { 
    UserState,
    UserActionTypes,
    UPDATE_WEIGHT_GOAL,
    UPDATE_WEIGHT_GOAL_FAILED,
  } from '@redux/types/userTypes';
  
  const initialState: UserState = {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    birthDate: null,
    gender: null,
    height: null,
    weight: null,
    target: null,
    goal: null,
  };
  
  const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
      case UPDATE_WEIGHT_GOAL:
        return {
          ...state,
          goal: action.payload,
        }
      
      case UPDATE_WEIGHT_GOAL_FAILED:
        console.log(action.payload);
        return state;
      
      default:
        return state;
    }
  };
  
export default userReducer;