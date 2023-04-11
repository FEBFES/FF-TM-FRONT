import React from 'react';
import styles from './LoginPage.module.css';
import { LoginForm } from '../modules/LoginForm/LoginForm';
import { LoginPageProps } from './LoginPage.props';

export const LoginPage: React.FC<LoginPageProps> = (): JSX.Element => {
  return (
    <div className={styles.loginPage}>
      <LoginForm />
    </div>
  );
};
