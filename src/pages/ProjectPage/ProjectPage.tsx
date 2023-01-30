import React from 'react';
import './ProjectPage.scss';
import { ProjectPageHeader } from './modules/ProjectPageHeader/ProjectPageHeader';
import { ProjectPageMain } from './modules/ProjectPageMain/ProjectPageMain';

export const ProjectPage: React.FC = (): JSX.Element => {
  return (
    <div className={'projpage'}>
      <ProjectPageHeader />
      <ProjectPageMain />
    </div>
  );
};
