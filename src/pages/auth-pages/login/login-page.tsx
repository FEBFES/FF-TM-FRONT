import React from 'react';
import { LoginForm } from '../modules/login-form/login-form';
import { SLoginPage } from './login-page.styled';

interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = (): JSX.Element => {
  return (
    <SLoginPage>
      <LoginForm />
    </SLoginPage>
  );
};
