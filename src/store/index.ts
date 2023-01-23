import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import AppSlice from './slices/AppSlice';

const rootReducer = combineReducers({
  app: AppSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: true,
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
