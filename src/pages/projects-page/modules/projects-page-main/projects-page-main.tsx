import React from 'react';
import { useTypedSelector } from '../../../../hooks/redux';
import { IProject } from '../../store/projects.type';
import { ProjectCard } from '../../components/project-card/project-card';
import { v4 } from 'uuid';
import { SProjectCont } from './projects-page-main.styled';

export const ProjectsPageMain: React.FC = (): JSX.Element => {
  const projects = useTypedSelector((state) => state.projects.projects);

  return (
    <SProjectCont>
      {projects?.map((proj: IProject) => {
        return <ProjectCard key={v4()} proj={proj} />;
      })}
    </SProjectCont>
  );
};
