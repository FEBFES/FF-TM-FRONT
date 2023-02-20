import React, { useEffect } from 'react';
import styles from './MainPageMain.module.css';
import { fetchProjects } from '../../store/projects.thunk';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { IProject } from '../../store/projects.type';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { v4 } from 'uuid';

interface MainPageMainProps {}

export const MainPageMain: React.FC<MainPageMainProps> = (): JSX.Element => {
  const projects = useTypedSelector((state) => state.projects.projects);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className={styles.projectCont}>
      {projects?.map((proj: IProject) => {
        return <ProjectCard key={v4()} proj={proj} />;
      })}
    </div>
  );
};
