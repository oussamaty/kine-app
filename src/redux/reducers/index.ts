import { combineReducers } from 'redux';
import authReducer from '@redux/reducers/authReducer';
import userReducer from '@redux/reducers/userReducer';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserState } from '@redux/types/userTypes';
import { loadingReducer } from '@redux/reducers/loadingReducer';
import { unitsReducer } from '@redux/reducers/unitsReducer';

const persistConfig = {
  key: 'user',
  storage: AsyncStorage,
};

const persistedUserReducer = persistReducer<UserState, any>(persistConfig, userReducer);

const rootReducer = combineReducers({
  auth: authReducer,
  user: persistedUserReducer,
  loading: loadingReducer,
  units: unitsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;