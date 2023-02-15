import React from 'react';
import styles from './NotFoundPage.module.css';
import { ArrowIcon } from '../../assets/icons/UtilsIcons';
import { Button } from '../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.notFoundPage}>
      <h1 className={styles.title}>404</h1>
      <span className={styles.subtitle}>looks life you're lost</span>
      <span className={styles.subtitle}>
        the page you are looking for not available!
      </span>
      <div className={styles.btnCont}>
        <Button
          className={styles.prevBtn}
          onClick={() => navigate(-1)}
          type={'default'}
        >
          <ArrowIcon /> Previous Page
        </Button>
        <Button
          className={styles.homeBtn}
          onClick={() => navigate('/')}
          type={'default'}
        >
          Home Page
        </Button>
      </div>
    </div>
  );
};
