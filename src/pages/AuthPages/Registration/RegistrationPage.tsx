import React from 'react';
import styles from './RegistrationPage.module.css';
import { RegistrationForm } from '../modules/RegistrationForm/RegistrationForm';

interface RegistrationPageProps {}

export const RegistrationPage: React.FC<
  RegistrationPageProps
> = (): JSX.Element => {
  return (
    <div className={styles.regPage}>
      <RegistrationForm />
    </div>
  );
};
