import React, { useEffect, useState } from 'react';
import { KanbanPageMain } from './modules/kanban-page-main/kanban-page-main';
import { KanbanPageSubheader } from './modules/kanban-page-subheader/kanban-page-subheader';
import { useTypedSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { TaskDrawer } from './modules/drawer/drawer';

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
      <KanbanPageSubheader />
      <KanbanPageMain setShowTaskModal={setShowTaskModal} />

      <TaskDrawer
        showTaskModal={showTaskModal}
        setShowTaskModal={setShowTaskModal}
      />

      {/*//todo*/}
      {/*{showTaskModal && <TaskWindow setShowWindow={setShowTaskModal} />}*/}
    </div>
  );
};
