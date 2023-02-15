import React from 'react';
import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { appRouts, privateRoutes } from '../../routing/routs';
import { ToastCont } from '../Toast/Toast';
import { EmptyLayout } from '../../layouts/EmptyLayout/EmptyLayout';
import { useTypedSelector } from '../../hooks/redux';
import { NotFoundPage } from '../../pages/404/NotFoundPage';
import { useTheme } from '../../hooks/useTheme';
import { Landing } from '../../pages/Landing/Landing';
import { MainPage } from '../../pages/MainPage/MainPage';

export const App = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  useTheme();
  return (
    <div className={styles.App}>
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

        {isAuth ? (
          <Route path="*" element={<MainPage />} />
        ) : (
          <Route path="*" element={<Landing />} />
        )}

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
