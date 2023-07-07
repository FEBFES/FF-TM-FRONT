import React from 'react';
import styles from './MainLayout.module.css';
import { MainLayoutProps } from './MainLayout.props';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { useTitle } from '../../hooks/useTitle';

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  pageTitle,
}): JSX.Element => {
  useTitle(pageTitle);

  return (
    <div className={styles.mainLay}>
      <Sidebar />
      <div className={styles.page}>{children}</div>
    </div>
  );
};
