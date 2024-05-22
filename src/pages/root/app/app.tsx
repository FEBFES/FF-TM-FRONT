import React from 'react';
import { useTypedSelector } from '../../../hooks/redux';
import { useTheme } from '../../../hooks/useTheme';
import { useLocales } from '../../../hooks/useLocales';
import { AuthAppRoutes, NotAuthAppRoutes } from '../modules';
import 'react-toastify/dist/ReactToastify.css';
import { useOffline } from '../../../hooks/useOffline';

export const App = () => {
  // const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const isAuth = false;

  useOffline();
  useTheme();
  useLocales();

  return <div>{isAuth ? <AuthAppRoutes /> : <NotAuthAppRoutes />}</div>;
};
