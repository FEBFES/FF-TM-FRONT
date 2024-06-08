import { SButton, SCardHeader } from '../../projects-page.styled';
import { Statistics } from '../statistics/statistics';
import { Card } from 'antd';
import React, { useState } from 'react';
import { AddProjModal } from '../add-proj-modal/add-proj-modal';

export const ProjectsHeader = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Card style={{ marginBottom: '20px', marginTop: '40px' }}>
        <SCardHeader>
          <Statistics projectsLength={123} />

          <SButton type={'primary'} onClick={() => setShowModal(true)}>
            + Новый проект
          </SButton>
        </SCardHeader>
      </Card>
      <AddProjModal show={showModal} setShow={setShowModal} />
    </>
  );
};
