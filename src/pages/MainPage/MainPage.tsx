import React from 'react';
import styles from './MainPage.module.css';
import { MainPageHeader } from './modules/MainPageHeader/MainPageHeader';
import { MainPageMain } from './modules/MainPageMain/MainPageMain';

export const MainPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.mainPage}>
      <MainPageHeader />
      <MainPageMain />
    </div>
  );
};
