import React, { useState } from 'react';
import { AddNewProjModal } from '../../components/add-new-proj-modal/add-new-proj-modal';
import { Button } from '../../../../ui/Button/Button';
import i18n from 'i18next';
import { Title } from '../../../../ui/typography';
import { SPageHeader } from './projects-page-header.styled';

export const ProjectsPageHeader: React.FC = (): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <SPageHeader>
      <Title level={'h4'}>{i18n.t('pages.projects.header.title')}</Title>
      <Button variant={'primary'} onClick={() => setShow(true)}>
        {i18n.t('pages.projects.header.addBtn')}
      </Button>
      <AddNewProjModal show={show} setShow={setShow} />
    </SPageHeader>
  );
};
