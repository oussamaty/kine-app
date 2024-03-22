import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from 'src/redux/reducers';

export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: rootReducer,
});

export default store;