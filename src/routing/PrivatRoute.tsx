import React from 'react';
import { Route, useLocation, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/redux';

export const PrivateRoute = (props: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuth = useTypedSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    navigate({ pathname: '/Login' }, { state: { from: location } });
  }
  return <Route {...props} />;
};
