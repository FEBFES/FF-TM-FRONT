import React, { useState } from 'react';
import styles from './ProjectsPageHeader.module.css';
import { AddNewProjModal } from '../../components/AddNewProjModal/AddNewProjModal';
import { Button } from '../../../../ui/Button/Button';
import i18n from 'i18next';
import { Title } from '../../../../ui/Typography';

export const ProjectsPageHeader: React.FC = (): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <header className={styles.ProjectsPage__header}>
      <Title
      //todo
      >
        {i18n.t('pages.projects.header.title')}
      </Title>
      <Button variant={'primary'} onClick={() => setShow(true)}>
        {i18n.t('pages.projects.header.addBtn')}
      </Button>
      <AddNewProjModal show={show} setShow={setShow} />
    </header>
  );
};
