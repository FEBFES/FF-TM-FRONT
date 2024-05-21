import React from 'react';
import { ArrowIcon } from '../../assets/icons/UtilsIcons';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../routing/routs';
import { useTranslation } from 'react-i18next';
import { Typography, Button } from 'antd';
import { SButtonContainer, SPage } from './not-found-page.styled';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <SPage>
      <Typography>{t('pages.notFoundPage.titleCode')}</Typography>
      <Typography>{t('pages.notFoundPage.title')}</Typography>
      <Typography>{t('pages.notFoundPage.subTitle')}</Typography>

      <SButtonContainer>
        <Button onClick={() => navigate(-1)}>
          <ArrowIcon />
          {t('pages.notFoundPage.backButton')}
        </Button>
        <Button onClick={() => navigate(appRoutsPath.ProjectPage.path)}>
          {t('pages.notFoundPage.homeButton')}
        </Button>
      </SButtonContainer>
    </SPage>
  );
};
