import React from 'react';
import styles from './ProjectsPageMain.module.css';
import { useTypedSelector } from '../../../../hooks/redux';
import { IProject } from '../../store/projects.type';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { v4 } from 'uuid';

export const ProjectsPageMain: React.FC = (): JSX.Element => {
  const projects = useTypedSelector((state) => state.projects.projects);

  return (
    <div className={styles.projectCont}>
      {projects?.map((proj: IProject) => {
        return <ProjectCard key={v4()} proj={proj} />;
      })}
    </div>
  );
};
