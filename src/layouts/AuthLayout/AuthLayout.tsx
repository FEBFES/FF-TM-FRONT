import React from 'react';
import './AuthLayout.module.css';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
}): JSX.Element => {
  return <div>{children}</div>;
};
