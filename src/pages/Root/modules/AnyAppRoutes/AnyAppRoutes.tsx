import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { EmptyLayout } from '../../../../layouts/EmptyLayout/EmptyLayout';
import { NotFoundPage } from '../../../404/NotFoundPage';

export const AnyAppRoutes: React.FC = (): JSX.Element => {
  return (
    <Routes>
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
