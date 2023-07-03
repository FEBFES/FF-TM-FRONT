import React, { useState } from 'react';
import styles from './ProjectsPageHeader.module.css';
import { AddNewProjModal } from '../../components/AddNewProjModal/AddNewProjModal';
import { Button } from '../../../../ui/Button/Button';

interface ProjectsPageHeaderProps {}

export const ProjectsPageHeader: React.FC<
  ProjectsPageHeaderProps
> = (): JSX.Element => {
  const [show, setShow] = useState(false);
  return (
    <header className={styles.ProjectsPage__header}>
      {/* todo i18next */}
      <span className={styles.page__title}>Projects</span>
      {/* todo i18next */}
      <Button theme={'primary'} onClick={() => setShow(true)}>
        Create new project
      </Button>
      <AddNewProjModal show={show} setShow={setShow} />
    </header>
  );
};
