import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks/redux';
import { Card, Divider, Statistic } from 'antd';
import { IProject } from './store/projects.type';
import { ProjectCard } from './components/project-card/project-card';
import { v4 } from 'uuid';
import {
  Container,
  SButton,
  SCardHeader,
  SProjCont,
} from './projects-page.styled';
import { AddNewProjModal } from './components/add-new-proj-modal/add-new-proj-modal';
import { Statistics } from './components/statistics/statistics';

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

      {haveFavoriteProjects && (
        <>
          <Divider orientation={'left'}>Избранное</Divider>
          <SProjCont>
            {projects?.map((proj: IProject) => {
              if (!proj.isFavourite) return null;
              return <ProjectCard key={v4()} proj={proj} />;
            })}
          </SProjCont>
        </>
      )}

      <Divider orientation={'left'}>Проекты</Divider>
      <SProjCont>
        {projects?.map((proj: IProject) => {
          if (proj.isFavourite) return null;
          return <ProjectCard key={v4()} proj={proj} />;
        })}
      </SProjCont>
      <AddNewProjModal show={showModal} setShow={setShowModal} />
    </Container>
  );
};
