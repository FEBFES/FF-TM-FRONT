import React from 'react';
import styles from './RegistrationPage.module.css';
import { RegistrationForm } from '../modules/RegistrationForm/RegistrationForm';
import { RegistrationPageProps } from './RegistrationPage.props';

export const RegistrationPage: React.FC<
  RegistrationPageProps
> = (): JSX.Element => {
  return (
    <div className={styles.regPage}>
      <RegistrationForm />
    </div>
  );
};
