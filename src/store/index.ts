import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import AppSlice from './slices/AppSlice';
import { projectsApi } from '../pages/ProjectPage/api/projects.api';

const rootReducer = combineReducers({
  app: AppSlice,
  [projectsApi.reducerPath]: projectsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: true,
      }).concat(projectsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
