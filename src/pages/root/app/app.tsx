import React from 'react';
import { useTypedSelector } from '../../../hooks/redux';
import { useTheme } from '../../../hooks/use-theme';
import { useLocales } from '../../../hooks/use-locales';
import { AuthAppRoutes, NotAuthAppRoutes } from '../modules';
import 'react-toastify/dist/ReactToastify.css';
import { useOffline } from '../../../hooks/use-offline';

export const App = () => {
  // const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const isAuth = true;

  useOffline();
  useTheme();
  useLocales();

  return <div>{isAuth ? <AuthAppRoutes /> : <NotAuthAppRoutes />}</div>;
};
