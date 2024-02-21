import * as React from 'react';
import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer, { RootState } from './reducers';
import { ActionTypes } from './types';

const initialState = {};

const middleware: Middleware[] = [thunk as ThunkMiddleware<RootState, ActionTypes>];

const store: Store<RootState, ActionTypes> & {
  dispatch: ThunkDispatch<RootState, void, ActionTypes>;
} = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export const withAppStore = (Component: React.FC) => {
    const ComponentWithStore: React.FC = () => (
        <Provider store={store}>
            <Component />
        </Provider>
    );
}

export default store;