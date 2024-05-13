import {
  UserState,
  UserActionTypes,
  UPDATE_USER_STATE,
  PURGE_USER_STATE,
  HeightUnit,
  WeightUnit,
  LiquidUnit,
  EnergyUnit,
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
  profilePicture: null,
  heightUnit: HeightUnit.CM,
  weightUnit: WeightUnit.KG,
  liquidUnit: LiquidUnit.L,
  energyUnit: EnergyUnit.CAL,
  heightToDisplay: null,
  weightToDisplay: null,
  targetToDisplay: null,
  tdeeToDisplay: null,
  caloriesToDisplay: null,
  nutrientRatios: {
    proteins: 0.2,
    carbs: 0.5,
    fat: 0.3
  },
  mealRatios: {
    BREAKFAST: 0.2,
    LUNCH: 0.4,
    DINNER: 0.3,
    SNACK: 0.1
  }
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case UPDATE_USER_STATE:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    
    case PURGE_USER_STATE:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;