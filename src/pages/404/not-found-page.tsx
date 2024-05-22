import React from 'react';
import { ArrowIcon } from '../../assets/icons/UtilsIcons';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../routing/routs';
import { useTranslation } from 'react-i18next';
import { Typography, Button, Space, Col, Row } from 'antd';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Space direction='vertical'>
      <Col>
        <Row justify={'center'}>
          <Typography.Title>{t('pages.notFoundPage.titleCode')}</Typography.Title>
        </Row>
        <Row justify={'center'}>
          <Typography.Title level={4}>{t('pages.notFoundPage.title')}</Typography.Title>
        </Row>
        <Row justify={'center'}>        
          <Typography.Title level={4}>{t('pages.notFoundPage.subTitle')}</Typography.Title>
        </Row>
      </Col>

      <Space direction='horizontal'>
        <Button 
          size='large'
          onClick={() => navigate(-1)}
        >
          <ArrowIcon />
          {t('pages.notFoundPage.backButton')}
        </Button>

        <Button
          size='large'
          type='primary'
          onClick={() => navigate(appRoutsPath.ProjectPage.path)}
        >
          {t('pages.notFoundPage.homeButton')}
        </Button>
      </Space>
    </Space>
  );
};
