import React from 'react';
import styles from './App.module.css';
import { useTypedSelector } from '../../../hooks/redux';
import { useTheme } from '../../../hooks/useTheme';
import { useLocales } from '../../../hooks/useLocales';
import { AuthAppRoutes } from '../modules/AuthAppRoutes/AuthAppRoutes';
import { NotAuthAppRoutes } from '../modules/NotAuthAppRoutes/NotAuthAppRoutes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);

  useTheme();
  useLocales();

  return (
    <div className={styles.App}>
      {isAuth ? <AuthAppRoutes /> : <NotAuthAppRoutes />}
      <ToastContainer autoClose={3000} />
    </div>
  );
};
