import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { countReducer } from './reducer';

const rootReducer = combineReducers({
  count: countReducer,
});

const reduxSaga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(reduxSaga));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
