import { 
    UserState,
    UserActionTypes,
    UPDATE_USER_STATE,
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
    activity: null,
    targetDate: null,
    bmr: null,
    tdee: null,
    calories: null,
    error: null,
  };
  
  const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
      case UPDATE_USER_STATE:
        return  {
          ...state,
          [action.payload.key]: action.payload.value
        };

      default:
        return state;
    }
  };
  
export default userReducer;