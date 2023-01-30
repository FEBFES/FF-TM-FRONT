import React, { useEffect } from 'react';
import { MainLayoutSidebar } from './MainLayoutSidebar';
import './MainLayout.scss';

type MainLayoutProps = {
  children: React.ReactNode;
  pageTitle: string;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  pageTitle,
}): JSX.Element => {
  useEffect(() => {
    const initialDocTitle = document.title;

    return () => {
      document.title = initialDocTitle;
    };
  });

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div className={'mainLay'}>
      <MainLayoutSidebar />
      <div className={'page'}>{children}</div>
    </div>
  );
};
