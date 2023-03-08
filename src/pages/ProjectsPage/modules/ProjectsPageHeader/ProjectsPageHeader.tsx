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
      <span className={styles.page__title}>Projects</span>
      <Button theme={'submit'} onClick={() => setShow(true)}>
        add
      </Button>
      <AddNewProjModal show={show} setShow={setShow} />
    </header>
  );
};
