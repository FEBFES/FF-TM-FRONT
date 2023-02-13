import React from 'react';
import './RegistrationPage.scss';
import { RegistrationForm } from './modules/RegistrationForm/RegistrationForm';

interface RegistrationPageProps {}

export const RegistrationPage: React.FC<
  RegistrationPageProps
> = (): JSX.Element => {
  return (
    <div className={'registrationPage'}>
      <RegistrationForm />
    </div>
  );
};
