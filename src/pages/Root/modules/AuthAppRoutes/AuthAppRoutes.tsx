import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { fetchProjects } from '../../../ProjectsPage/store/projects.thunk';
import { fetchGetUserInfo } from '../../../../store/User/user.thunk';
import { privateRoutes } from '../../../../routing/routs';
import { EmptyLayout } from '../../../../layouts/EmptyLayout/EmptyLayout';
import { NotFoundPage } from '../../../404/NotFoundPage';
import {
  fetchProjectDashboard,
  fetchProjectInfo,
} from '../../../KanbanPage/store/kanban.thunk';

export const AuthAppRoutes: React.FC = () => {
  const dispatch = useAppDispatch();
  const userId = useTypedSelector((state) => state.user.userId);
  const projId = useTypedSelector((state) => state.curProj.projId);

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchGetUserInfo(userId));
    projId && dispatch(fetchProjectDashboard({ projId }));
    projId && dispatch(fetchProjectInfo(projId));
  }, [userId, dispatch, projId]);

  return (
    <Routes>
      {privateRoutes.map((route, i) => {
        return (
          <Route
            path={route.path}
            key={i}
            element={
              <route.layout pageTitle={route.title}>
                <route.component />
              </route.layout>
            }
          />
        );
      })}
      <Route
        path="*"
        element={
          <EmptyLayout pageTitle={'No Found Page'}>
            <NotFoundPage />
          </EmptyLayout>
        }
      />
    </Routes>
  );
};
