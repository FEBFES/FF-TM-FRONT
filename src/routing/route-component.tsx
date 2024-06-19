import { Route, Routes } from 'react-router-dom';
import { appRouts } from './route-list';

export const RouteComponent = () => {
  return (
    <Routes>
      {appRouts.map((route, i) => {
        return (
          <Route
            path={route.path}
            key={i}
            element={
              // <PrivateRoute>
              <route.layout pageTitle={route.title}>
                <route.component />
              </route.layout>
              // </PrivateRoute>
            }
          />
        );
      })}
    </Routes>
  );
};
