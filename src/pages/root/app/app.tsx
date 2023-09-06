import React from 'react';
import { useTypedSelector } from '../../../hooks/redux';
import { useTheme } from '../../../hooks/useTheme';
import { useLocales } from '../../../hooks/useLocales';
import { AuthAppRoutes, NotAuthAppRoutes } from '../modules';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useOffline } from '../../../hooks/useOffline';
import { SAppContainer } from './app.styled';

export const App = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);

  useOffline();
  useTheme();
  useLocales();

  return (
    <SAppContainer>
      {isAuth ? <AuthAppRoutes /> : <NotAuthAppRoutes />}
      <ToastContainer autoClose={3000} />
    </SAppContainer>
  );
};
