import React from 'react';
import { RegistrationForm } from '../modules/RegistrationForm/RegistrationForm';
import { SPage } from './RegistrationPage.styled';

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
