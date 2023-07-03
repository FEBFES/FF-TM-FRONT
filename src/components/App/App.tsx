import React from 'react';
import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { appRouts, privateRoutes } from '../../routing/routs';
import { ToastCont } from '../Toast/Toast';
import { EmptyLayout } from '../../layouts/EmptyLayout/EmptyLayout';
import { useTypedSelector } from '../../hooks/redux';
import { NotFoundPage } from '../../pages/404/NotFoundPage';
import { useTheme } from '../../hooks/useTheme';
import { useLocales } from '../../hooks/useLocales';

export const App = () => {
  // const dispatch = useAppDispatch();
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  useTheme();
  useLocales();

  // useEffect(() => {
  //   dispatch(fetchGetUserInfo(1));
  // }, []);

  return (
    <div className={styles.App}>
      {/*todo*/}
      <Routes>
        {isAuth
          ? privateRoutes.map((route, i) => {
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
          })
          : appRouts.map((route, i: number) => {
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
      <ToastCont />
    </div>
  );
};
