import React from 'react';
import './AuthLayout.module.css';
import { AuthLayoutProps } from './AuthLayout.props';

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
}): JSX.Element => {
  return <div>{children}</div>;
};
