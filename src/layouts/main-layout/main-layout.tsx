import React from 'react';
import { Sidebar } from '../../components/sidebar/sidebar';
import { useTitle } from '../../hooks/useTitle';
import { SPage, SMainLayout } from './main-layout.styled';

export interface MainLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  pageTitle,
}): JSX.Element => {
  useTitle(pageTitle);

  return (
    <SMainLayout>
      <Sidebar />
      <SPage>{children}</SPage>
    </SMainLayout>
  );
};
