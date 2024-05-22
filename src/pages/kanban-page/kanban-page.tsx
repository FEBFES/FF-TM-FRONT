import React, { useEffect, useState } from 'react';
import { KanbanPageHeader } from './modules/kanban-page-header/kanban-page-header';
import { KanbanPageMain } from './modules/kanban-page-main/kanban-page-main';
import { KanbanPageSubheader } from './modules/kanban-page-subheader/kanban-page-subheader';
import { TaskWindow } from './modules/task-window/task-window';
import { useTypedSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { SPageWrap, SKanbanPage } from './kanban-page.styled';

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
    <div>
      <KanbanPageHeader />
      <KanbanPageSubheader />
      <KanbanPageMain setShowTaskModal={setShowTaskModal} />

      {showTaskModal && <TaskWindow setShowWindow={setShowTaskModal} />}
    </div>
  );
};
