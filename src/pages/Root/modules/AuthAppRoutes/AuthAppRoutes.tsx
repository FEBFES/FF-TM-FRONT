import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { fetchProjects } from '../../../ProjectsPage/store/projects.thunk';
import { fetchGetUserInfo } from '../../../../store/User/user.thunk';
import { privateRoutes } from '../../../../routing/routs';

export const AuthAppRoutes: React.FC = () => {
  const dispatch = useAppDispatch();
  const userId = useTypedSelector((state) => state.user.userId);

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchGetUserInfo(userId));
  }, [userId, dispatch]);

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
    </Routes>
  );
};
