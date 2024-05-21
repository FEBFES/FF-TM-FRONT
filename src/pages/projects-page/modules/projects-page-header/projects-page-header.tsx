import React, { useState } from 'react';
import { AddNewProjModal } from '../../components/add-new-proj-modal/add-new-proj-modal';
import { Typography } from 'antd';
import i18n from 'i18next';
import { SPageHeader } from './projects-page-header.styled';
import { Button } from 'antd';

export const ProjectsPageHeader: React.FC = (): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <SPageHeader>
      <Typography>{i18n.t('pages.projects.header.title')}</Typography>
      <Button onClick={() => setShow(true)}>
        {i18n.t('pages.projects.header.addBtn')}
      </Button>
      <AddNewProjModal show={show} setShow={setShow} />
    </SPageHeader>
  );
};
