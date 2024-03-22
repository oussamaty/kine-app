import { combineReducers } from 'redux';
import authReducer from 'src/redux/reducers/authReducer';
import userReducer from 'src/redux/reducers/userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;