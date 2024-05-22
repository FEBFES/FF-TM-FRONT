import React from 'react';
import { ProjectsPageHeader, ProjectsPageMain } from './modules';

export const ProjectsPage: React.FC = (): JSX.Element => {
  return (
    <div>
      <ProjectsPageHeader />
      <ProjectsPageMain />
    </div>
  );
};
