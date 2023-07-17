import React, { useEffect, useState } from 'react';
import styles from './KanbanPage.module.css';
import { KanbanPageHeader } from './modules/KanbanPageHeader/KanbanPageHeader';
import { KanbanPageMain } from './modules/KanbanPageMain/KanbanPageMain';
import { KanbanPageSubheader } from './modules/KanbanPageSubheader/KanbanPageSubheader';
import { TaskWindow } from './modules/TaskWindow/TaskWindow';
import { fetchProjectDashboard, fetchProjectInfo } from './store/kanban.thunk';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';

export const KanbanPage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [showTaskModal, setShowTaskModal] = useState<boolean>(false);
  const [curView, setCurView] = useState<'col' | 'row'>('col');
  const curProjId =
    useTypedSelector((state) => state.projects.curProj)?.id ||
    Number(localStorage.getItem('curProj'));
  const filters = useTypedSelector((state) => state.projectKanban.filters);

  useEffect(() => {
    if (curProjId) {
      dispatch(
        fetchProjectDashboard({
          projId: curProjId,
          params: filters.length !== 0 ? filters : null,
        })
      );
      dispatch(fetchProjectInfo(curProjId));
    }
  }, [curProjId, dispatch, filters]);

  return (
    <div className={styles.wrap}>
      <div
        className={`${styles.KanbanPage} ${showTaskModal && styles.showModal}`}
      >
        <KanbanPageHeader />
        <KanbanPageSubheader curView={curView} setCurView={setCurView} />
        <KanbanPageMain curView={curView} setShowTaskModal={setShowTaskModal} />
      </div>

      {showTaskModal && <TaskWindow setShowWindow={setShowTaskModal} />}
    </div>
  );
};
