import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import { SEmptyLayout } from './empty-layout.styled';

export default interface EmptyLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export const EmptyLayout: React.FC<EmptyLayoutProps> = ({
  children,
  pageTitle,
}): JSX.Element => {
  useTitle(pageTitle);

  return <SEmptyLayout>{children}</SEmptyLayout>;
};
