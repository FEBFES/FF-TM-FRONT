import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import ProjectsSlice from '../pages/projects/__data__/reducers/deprecated.projects.slice';
import AuthSlice from './reducers/auth.slice';
import KanbanSlice from './reducers/kanban.slice';
import UserSlice from './reducers/old/user.slice';
import AppSlice from '../pages/app/__data__/reducers/app-slice';

const rootReducer = combineReducers({
  app: AppSlice,
  projects: ProjectsSlice,
  curProj: KanbanSlice,
  auth: AuthSlice,
  user: UserSlice,
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
