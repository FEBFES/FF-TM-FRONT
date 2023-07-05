import React from 'react';
import styles from './NotFoundPage.module.css';
import { ArrowIcon } from '../../assets/icons/UtilsIcons';
import { Button } from '../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../routing/routs';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={styles.notFoundPage}>
      <h1 className={styles.title}>{t('pages.notFoundPage.titleCode')}</h1>
      <span className={styles.subtitle}>{t('pages.notFoundPage.title')}</span>
      <span className={styles.subtitle}>
        {t('pages.notFoundPage.subTitle')}
      </span>
      <div className={styles.btnCont}>
        <Button
          className={styles.prevBtn}
          onClick={() => navigate(-1)}
          theme={'default'}
        >
          <ArrowIcon />
          {t('pages.notFoundPage.backButton')}
        </Button>
        <Button
          className={styles.homeBtn}
          onClick={() => navigate(appRoutsPath.ProjectPage.path)}
          theme={'default'}
        >
          {t('pages.notFoundPage.homeButton')}
        </Button>
      </div>
    </div>
  );
};
