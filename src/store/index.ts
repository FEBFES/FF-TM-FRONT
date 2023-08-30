import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import ProjectsSlice from '../pages/projects-page/store/projects.slice';
import AuthSlice from '../pages/auth-pages/store/auth.slice';
import KanbanSlice from '../pages/KanbanPage/store/kanban.slice';
import UserSlice from './user/user.slice';
import AppSlice from '../pages/root/store/app-slice';

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
