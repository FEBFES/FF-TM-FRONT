import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { appRouts } from '../../../../routing/routs';

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
    </Routes>
  );
};
