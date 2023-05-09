import React from 'react';
import styles from './ProjectsPage.module.css';
import { ProjectsPageHeader } from './modules/ProjectsPageHeader/ProjectsPageHeader';
import { ProjectsPageMain } from './modules/ProjectsPageMain/ProjectsPageMain';

export const ProjectsPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.projPage}>
      <ProjectsPageHeader />
      <ProjectsPageMain />
    </div>
  );
};
