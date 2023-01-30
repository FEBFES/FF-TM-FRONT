import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import AppSlice from './slices/AppSlice';
import ProjectsSlice from '../pages/MainPage/store/projects.slice';
import ColumnSlice from '../pages/ProjectPage/store/column.slice';

const rootReducer = combineReducers({
  app: AppSlice,
  projects: ProjectsSlice,
  projectColumns: ColumnSlice,
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
