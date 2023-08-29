import React from 'react';
import styles from './ProjectsPage.module.css';
import { ProjectsPageHeader } from './modules/ProjectsPageHeader/ProjectsPageHeader';
import { ProjectsPageMain } from './modules/ProjectsPageMain/ProjectsPageMain';
import { Sidebar } from '../../components/sidebar/sidebar';

export const ProjectsPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.projPage}>
      <Sidebar />
      <div className={styles.main}>
        <ProjectsPageHeader />
        <ProjectsPageMain />
      </div>
    </div>
  );
};
