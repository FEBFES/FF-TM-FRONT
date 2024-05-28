import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks/redux';
import { Card, Divider } from 'antd';
import { IProject } from '../../__data__/types/old/projects.type';
import { ProjectCard } from './components/project-card/project-card';
import { v4 } from 'uuid';
import {
  Container,
  SButton,
  SCardHeader,
  SProjCont,
} from './projects-page.styled';
import { AddProjModal } from './components/add-proj-modal/add-proj-modal';
import { Statistics } from './components/statistics/statistics';
import { ShowContainer } from '../../components/show-container/show-container';

export const ProjectsPage: React.FC = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { projects, haveFavoriteProjects } = useTypedSelector(
    (state) => state.projects
  );

  return (
    <Container>
      <Card style={{ marginBottom: '20px', marginTop: '40px' }}>
        <SCardHeader>
          <Statistics projectsLength={projects.length} />

          <SButton type={'primary'} onClick={() => setShowModal(true)}>
            + Новый проект
          </SButton>
        </SCardHeader>
      </Card>

      <ShowContainer rule={haveFavoriteProjects}>
        <Divider orientation={'left'}>Избранное</Divider>
        <SProjCont>
          {projects?.map((proj: IProject) => {
            if (!proj.isFavourite) return null;
            return <ProjectCard key={v4()} proj={proj} />;
          })}
        </SProjCont>
      </ShowContainer>

      <Divider orientation={'left'}>Проекты</Divider>
      <SProjCont>
        {projects?.map((proj: IProject) => {
          if (proj.isFavourite) return null;
          return <ProjectCard key={v4()} proj={proj} />;
        })}
      </SProjCont>

      <AddProjModal show={showModal} setShow={setShowModal} />
    </Container>
  );
};
