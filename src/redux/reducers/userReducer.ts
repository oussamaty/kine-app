import {
  UserState,
  UserActionTypes,
  UPDATE_USER_STATE,
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
  profilePicture: undefined,
  heightUnit: HeightUnit.CM,
  weightUnit: WeightUnit.KG,
  liquidUnit: LiquidUnit.L,
  energyUnit: EnergyUnit.CAL,
  heightToDisplay: null,
  weightToDisplay: null,
  targetToDisplay: null,
  tdeeToDisplay: null,
  caloriesToDisplay: null,
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case UPDATE_USER_STATE:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };

    default:
      return state;
  }
};

export default userReducer;