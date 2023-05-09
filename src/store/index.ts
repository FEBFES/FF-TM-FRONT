import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import AppSlice from './slices/AppSlice';
import ProjectsSlice from '../pages/ProjectsPage/store/projects.slice';
import AuthSlice from '../pages/AuthPages/store/auth.slice';
import KanbanSlice from '../pages/KanbanPage/store/kanban.slice';

const rootReducer = combineReducers({
  app: AppSlice,
  projects: ProjectsSlice,
  projectKanban: KanbanSlice,
  auth: AuthSlice,
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
