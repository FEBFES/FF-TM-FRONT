import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { appRouts } from '../../routing/routs';
import { ToastCont } from '../Toast/Toast';
import { EmptyLayout } from '../../layouts/EmptyLayout/EmptyLayout';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        {appRouts.map((route, i) => {
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
