import React from 'react';
import './LoginPage.scss';
import { LoginForm } from '../modules/LoginForm/LoginForm';

interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = (): JSX.Element => {
  return (
    <div className={'loginPage'}>
      <LoginForm />
    </div>
  );
};
