import React, { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { Divider } from 'antd';
import { IProject } from './__data__/type/projects.type';
import { ProjectCard } from './components/project-card/project-card';
import { v4 } from 'uuid';
import { Container, SProjCont } from './projects-page.styled';
import { ShowContainer } from '../../components/show-container/show-container';
import { getProjectsThunk } from './__data__/thunk/get-projects';
import { ProjectsHeader } from './components/header/header';

export const ProjectsPage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { projectsList, haveFavoriteProjects } = useTypedSelector(
    (state) => state.projects
  );

  useEffect(() => {
    dispatch(getProjectsThunk());
  }, []);

  return (
    <Container>
      <ProjectsHeader />

      <Divider orientation={'left'}>Избранное</Divider>
      <ShowContainer
        rule={haveFavoriteProjects}
        desc={'Добавьте первый проект в избранное'}
      >
        <SProjCont>
          {projectsList?.map((proj: IProject) => {
            if (!proj.isFavourite) return null;
            return <ProjectCard key={v4()} proj={proj} />;
          })}
        </SProjCont>
      </ShowContainer>

      <Divider orientation={'left'}>Проекты</Divider>
      <ShowContainer
        rule={projectsList.length !== 0}
        desc={'Добавьте новый проект'}
      >
        <SProjCont>
          {projectsList?.map((proj: IProject) => {
            if (proj.isFavourite) return null;
            return <ProjectCard key={v4()} proj={proj} />;
          })}
        </SProjCont>
      </ShowContainer>
    </Container>
  );
};
