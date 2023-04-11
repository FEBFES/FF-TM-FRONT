import React, { useEffect } from 'react';
import { MainLayoutSidebar } from './sidebar/MainLayoutSidebar';
import styles from './MainLayout.module.css';
import { MainLayoutProps } from './MainLayout.props';

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  pageTitle,
}): JSX.Element => {
  //todo объеединить в хук во всех лайоутах
  useEffect(() => {
    const initialDocTitle = document.title;

    return () => {
      document.title = initialDocTitle;
    };
  }, []);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div className={styles.mainLay}>
      <MainLayoutSidebar />
      <div className={styles.page}>{children}</div>
    </div>
  );
};
