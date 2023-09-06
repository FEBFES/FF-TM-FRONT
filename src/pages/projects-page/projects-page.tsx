import React from 'react';
import { ProjectsPageHeader, ProjectsPageMain } from './modules';
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
