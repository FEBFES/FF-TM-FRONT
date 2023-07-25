import React, { useEffect, useState } from 'react';
import styles from './KanbanPage.module.css';
import { KanbanPageHeader } from './modules/KanbanPageHeader/KanbanPageHeader';
import { KanbanPageMain } from './modules/KanbanPageMain/KanbanPageMain';
import { KanbanPageSubheader } from './modules/KanbanPageSubheader/KanbanPageSubheader';
import { TaskWindow } from './modules/TaskWindow/TaskWindow';
import { useTypedSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';

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
    <div className={styles.wrap}>
      <div
        className={`${styles.KanbanPage} ${showTaskModal && styles.showModal}`}
      >
        <KanbanPageHeader />
        <KanbanPageSubheader />
        <KanbanPageMain setShowTaskModal={setShowTaskModal} />
      </div>

      {showTaskModal && <TaskWindow setShowWindow={setShowTaskModal} />}
    </div>
  );
};
