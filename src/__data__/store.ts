import { combineReducers } from 'redux';
import {
  asyncThunkCreator,
  buildCreateSlice,
  configureStore,
} from '@reduxjs/toolkit';
import AuthSlice from '../pages/auth/__data__/slices/auth.slice';
import ProjectsSlice from '../pages/projects/__data__/slices/projectsSlice';
import kanbanSlice from '../pages/kanban/__data__/slices/kanban.slice';

const rootReducer = combineReducers({
  // app: AppSlice,
  projects: ProjectsSlice.reducer,
  kanban: kanbanSlice,
  auth: AuthSlice,
  // user: UserSlice,
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
