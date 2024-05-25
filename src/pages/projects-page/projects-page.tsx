import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks/redux';
import { Card, Statistic } from 'antd';
import { IProject } from './store/projects.type';
import { AddNewProjModal, ProjectCard } from './components';
import { v4 } from 'uuid';
import {
  Container,
  SButton,
  SCardHeader,
  SProjCont,
  SStatistic,
} from './projects-page.styled';

export const ProjectsPage: React.FC = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const projects = useTypedSelector((state) => state.projects.projects);

  return (
    <Container>
      <Card style={{ marginBottom: '20px', marginTop: '40px' }}>
        <SCardHeader>
          <SStatistic>
            <Statistic title={'Проекты:'} value={projects?.length || '0'} />

            <Statistic title={'Бэклог:'} value={'2421'} />
            <Statistic title={'Дефекты:'} value={'124'} />
            <Statistic title={'Задачи:'} value={'89'} />
          </SStatistic>

          <SButton type={'primary'} onClick={() => setShowModal(true)}>
            + Новый проект
          </SButton>
        </SCardHeader>
      </Card>

      <SProjCont>
        {projects?.map((proj: IProject) => {
          return <ProjectCard key={v4()} proj={proj} />;
        })}
      </SProjCont>
      <AddNewProjModal show={showModal} setShow={setShowModal} />
    </Container>
  );
};
