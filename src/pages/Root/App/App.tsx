import React from 'react';
import styles from './App.module.css';
import { useTypedSelector } from '../../../hooks/redux';
import { useTheme } from '../../../hooks/useTheme';
import { useLocales } from '../../../hooks/useLocales';
import { ToastCont } from '../../../components/Toast/Toast';
import { AnyAppRoutes } from '../modules/AnyAppRoutes/AnyAppRoutes';
import { AuthAppRoutes } from '../modules/AuthAppRoutes/AuthAppRoutes';
import { NotAuthAppRoutes } from '../modules/NotAuthAppRoutes/NotAuthAppRoutes';

export const App = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);

  useTheme();
  useLocales();

  return (
    <div className={styles.App}>
      {isAuth ? <AuthAppRoutes /> : <NotAuthAppRoutes />}
      <AnyAppRoutes />
      <ToastCont />
    </div>
  );
};
