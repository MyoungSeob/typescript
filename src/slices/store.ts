import {combineReducers, configureStore} from '@reduxjs/toolkit';
import contentsSlice from './contentsSlice';

const reducer = combineReducers({
  contents: contentsSlice,
});

const store = configureStore({
  reducer,
});

export type ReducerType = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
