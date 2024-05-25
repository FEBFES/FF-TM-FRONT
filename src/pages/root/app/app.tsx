import React from 'react';
import { useTypedSelector } from '../../../hooks/redux';
import { AuthAppRoutes, NotAuthAppRoutes } from '../modules';
import { useOffline } from '../../../hooks/use-offline';

export const App = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);

  useOffline();
  // useTheme();
  // useLocales();

  return <div>{isAuth ? <AuthAppRoutes /> : <NotAuthAppRoutes />}</div>;
};
