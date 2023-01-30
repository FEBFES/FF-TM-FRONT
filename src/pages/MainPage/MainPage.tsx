import React from 'react';
import './MainPage.scss';
import { MainPageHeader } from './modules/MainPageHeader/MainPageHeader';
import { MainPageMain } from './modules/MainPageMain/MainPageMain';

export const MainPage: React.FC = (): JSX.Element => {
  return (
    <div className={'mainPage'}>
      <MainPageHeader />
      <MainPageMain />
    </div>
  );
};
