import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { appRouts } from '../../../../routing/routs';
import { EmptyLayout } from '../../../../layouts/EmptyLayout/EmptyLayout';
import { NotFoundPage } from '../../../404/NotFoundPage';

export const NotAuthAppRoutes: React.FC = () => {
  return (
    <Routes>
      {appRouts?.map((route, i: number) => {
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
