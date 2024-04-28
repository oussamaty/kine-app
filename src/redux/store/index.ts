import { configureStore, ThunkMiddleware } from '@reduxjs/toolkit';
import rootReducer, { RootState } from '@redux/reducers';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { LoadingActionTypes } from '@redux/types/loadingTypes';

export type AppDispatch = typeof store.dispatch;

const loadingMiddleware: ThunkMiddleware<RootState, LoadingActionTypes> = store => next => action=> {
  if (typeof action === 'function') {
      store.dispatch({ type: 'SHOW_LOADING' } as LoadingActionTypes);
      return action(store.dispatch, store.getState)
          .then((response: any) => {
              store.dispatch({ type: 'HIDE_LOADING' } as LoadingActionTypes);
              return response;
          })
          .catch((error: any) => {
              store.dispatch({ type: 'HIDE_LOADING' } as LoadingActionTypes);
              throw error;
          });
  }
  return next(action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(loadingMiddleware),
});


const persistor = persistStore(store);

export { store, persistor };