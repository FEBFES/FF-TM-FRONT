import React, { useEffect, useState } from 'react';
import styles from './MainPageMain.module.css';
import { fetchProjects } from '../../store/projects.thunk';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { IProject } from '../../store/projects.type';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { v4 } from 'uuid';

interface MainPageMainProps {}

export const MainPageMain: React.FC<MainPageMainProps> = (): JSX.Element => {
  const { projects } = useTypedSelector((state) => state.projects);
  const dispatch = useAppDispatch();
  const [localProjects, setLocalProjects] = useState<IProject[]>([]);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    setLocalProjects(projects);
  }, [projects]);

  return (
    <div className={styles.projectCont}>
      {localProjects?.map((proj) => {
        return <ProjectCard key={v4()} proj={proj} />;
      })}
    </div>
  );
};
