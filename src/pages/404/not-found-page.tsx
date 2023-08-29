import React from 'react';
import { ArrowIcon } from '../../assets/icons/UtilsIcons';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../routing/routs';
import { useTranslation } from 'react-i18next';
import { Title, Text } from '../../ui/Typography';
import {
  SButtonContainer,
  SPage,
  SPrevButton,
  SHomeButton,
} from './not-found-page.styled';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <SPage>
      <Title level={'h5'}>{t('pages.notFoundPage.titleCode')}</Title>
      <Text>{t('pages.notFoundPage.title')}</Text>
      <Text>{t('pages.notFoundPage.subTitle')}</Text>

      <SButtonContainer>
        <SPrevButton onClick={() => navigate(-1)} variant={'secondary'}>
          <ArrowIcon />
          {t('pages.notFoundPage.backButton')}
        </SPrevButton>
        <SHomeButton
          onClick={() => navigate(appRoutsPath.ProjectPage.path)}
          variant={'primary'}
        >
          {t('pages.notFoundPage.homeButton')}
        </SHomeButton>
      </SButtonContainer>
    </SPage>
  );
};
