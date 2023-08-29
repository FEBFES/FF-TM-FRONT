import React, { useEffect, useState } from 'react';
import { KanbanPageHeader } from './modules/KanbanPageHeader/KanbanPageHeader';
import { KanbanPageMain } from './modules/KanbanPageMain/KanbanPageMain';
import { KanbanPageSubheader } from './modules/KanbanPageSubheader/KanbanPageSubheader';
import { TaskWindow } from './modules/TaskWindow/TaskWindow';
import { useTypedSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { SPageWrap, SKanbanPage } from './KanbanPage.styled';

export const KanbanPage: React.FC = (): JSX.Element => {
  const [showTaskModal, setShowTaskModal] = useState<boolean>(false);
  const curProjId = useTypedSelector((state) => state.curProj.projId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!curProjId) {
      navigate('/');
    }
  }, [curProjId, navigate]);

  return (
    <SPageWrap>
      <SKanbanPage full={showTaskModal}>
        <KanbanPageHeader />
        <KanbanPageSubheader />
        <KanbanPageMain setShowTaskModal={setShowTaskModal} />
      </SKanbanPage>

      {showTaskModal && <TaskWindow setShowWindow={setShowTaskModal} />}
    </SPageWrap>
  );
};
