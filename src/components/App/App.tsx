import React from 'react';
import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { appRouts, privateRoutes } from '../../routing/routs';
import { ToastCont } from '../Toast/Toast';
import { EmptyLayout } from '../../layouts/EmptyLayout/EmptyLayout';
import { useTypedSelector } from '../../hooks/redux';

export const App = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
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
        <Route
          path="*"
          element={
            <EmptyLayout pageTitle={'No Found Page'}>
              <h1>No Found Page</h1>
            </EmptyLayout>
          }
        />
      </Routes>
      <ToastCont />
    </div>
  );
};
