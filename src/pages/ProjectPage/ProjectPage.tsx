import React from 'react';
import styles from './ProjectPage.module.css';
import { ProjectPageHeader } from './modules/ProjectPageHeader/ProjectPageHeader';
import { ProjectPageMain } from './modules/ProjectPageMain/ProjectPageMain';

export const ProjectPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.projpage}>
      <ProjectPageHeader />
      <ProjectPageMain />
    </div>
  );
};
