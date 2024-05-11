import { combineReducers } from 'redux';
import authReducer from '@redux/reducers/authReducer';
import userReducer from '@redux/reducers/userReducer';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserState } from '@redux/types/userTypes';
import { requestReducer } from '@redux/reducers/requestReducer';

const persistConfig = {
  key: 'user',
  storage: AsyncStorage,
};

const persistedUserReducer = persistReducer<UserState, any>(persistConfig, userReducer);

const rootReducer = combineReducers({
  auth: authReducer,
  user: persistedUserReducer,
  request: requestReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;