import React from 'react';
import { ProjectsPageHeader } from './modules/projects-page-header/projects-page-header';
import { ProjectsPageMain } from './modules/projects-page-main/projects-page-main';
import { Sidebar } from '../../components/sidebar/sidebar';
import { SProjectPage, SProjectMainSection } from './projects-page.styled';

export const ProjectsPage: React.FC = (): JSX.Element => {
  return (
    <SProjectPage>
      <Sidebar />
      <SProjectMainSection>
        <ProjectsPageHeader />
        <ProjectsPageMain />
      </SProjectMainSection>
    </SProjectPage>
  );
};
