import React from 'react';
import { RegistrationForm } from '../modules/registration-form/registration-form';
import { SPage } from './registration-page.styled';

interface RegistrationPageProps {}

export const RegistrationPage: React.FC<
  RegistrationPageProps
> = (): JSX.Element => {
  return (
    <SPage>
      <RegistrationForm />
    </SPage>
  );
};
