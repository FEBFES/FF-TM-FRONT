import React, { useEffect, useState } from 'react';
import './MainPageMain.scss';
import { fetchProjects } from '../../store/projects.thunk';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { IProject } from '../../store/projects.type';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

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
    <div className={'projectCont'}>
      {localProjects?.map((proj) => {
        return <ProjectCard proj={proj} />;
      })}
    </div>
  );
};
