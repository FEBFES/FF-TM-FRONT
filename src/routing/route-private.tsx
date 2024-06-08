import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/redux';
import { appRoutsPath } from './route-list';

export const PrivateRoute: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const isAuth = useTypedSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    navigate({ pathname: appRoutsPath.LoginPage.to }, { replace: true });
  }

  return <>{children}</>;
};
