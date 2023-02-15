import React from 'react';
import styles from './Landing.module.css';
import { EmptyLayout } from '../../layouts/EmptyLayout/EmptyLayout';
import { Button } from '../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import landImg1 from '../../assets/img/landImg1.png';
import landImg2 from '../../assets/img/landImg2.png';
import landImg3 from '../../assets/img/landImg3.png';
import landImg4 from '../../assets/img/landImg4.png';
import landImg5 from '../../assets/img/landImg5.png';
import { Switcher } from '../../ui/Switcher/Switcher';
import { useTypedSelector } from '../../hooks/redux';
import { useTheme } from '../../hooks/useTheme';
import { appRoutsPath } from '../../routing/routs';

export const Landing = () => {
  const navigate = useNavigate();
  const theme = useTypedSelector((state) => state.app.theme);
  const { changeTheme } = useTheme();

  return (
    <EmptyLayout pageTitle={'FF-TM'}>
      <div className={styles.landing}>
        <header className={styles.landing__header}>
          <Switcher
            className={styles.switcher}
            onClick={changeTheme}
            isActive={theme === 'dark'}
          />
          <Button
            onClick={() => navigate(appRoutsPath.LoginPage.to)}
            type={'default'}
          >
            Log in
          </Button>
          <Button
            onClick={() => navigate(appRoutsPath.RegistrationPage.to)}
            type={'outline'}
          >
            Sing in
          </Button>
        </header>
        <h1 className={styles.title}>TRACK YOUR PROJECTS</h1>
        <h1 className={styles.title}>WITH F/F</h1>
        <h2 className={styles.subtitle}>
          Solve tasks quickly and conveniently with F/F - Task manager
        </h2>
        <Button
          className={styles.startBtn}
          onClick={() => navigate(appRoutsPath.LoginPage.to)}
          type={'outline'}
        >
          Get started
        </Button>

        <div className={styles.imgCont}>
          <img src={landImg1} alt="" />
          <img src={landImg2} alt="" />
          <img src={landImg3} alt="" />
          <img src={landImg4} alt="" />
          <img src={landImg5} alt="" />
        </div>
      </div>
    </EmptyLayout>
  );
};
