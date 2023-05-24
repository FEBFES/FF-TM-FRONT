import React, { useEffect, useState } from 'react';
import { AddTaskModal } from '../../components/AddTaskModal/AddTaskModal';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { clearKanbanSlice } from '../../store/kanban.slice';
import {
  fetchAddNewTask,
  fetchDelCol,
  fetchDelTask,
  fetchProjectDashboard,
  fetchProjectInfo,
} from '../../store/kanban.thunk';
import styles from './KanbanPageMain.module.css';
import { Column, IColumns } from '../../components/Column';
import { v4 } from 'uuid';
import { IPriorityType } from '../../components/PrioritySelect/PrioritySelect.type';

interface KanbanPageProps {
  setShowTaskModal: (bool: boolean) => void;
}

export const KanbanPageMain: React.FC<KanbanPageProps> = ({
  setShowTaskModal,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const columns = useTypedSelector((state) => state.projectKanban.columns);
  const curProjId =
    useTypedSelector((state) => state.projects.curProj)?.id ||
    Number(localStorage.getItem('curProj'));
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [curCol, setCurCol] = useState<number | null>(null);

  useEffect(() => {
    if (curProjId) {
      dispatch(fetchProjectDashboard(curProjId));
      dispatch(fetchProjectInfo(curProjId));
    }

    return () => {
      dispatch(clearKanbanSlice());
    };
  }, [curProjId, dispatch]);

  const addNewTaskHandler = (
    name: string,
    description: string,
    priority: IPriorityType
  ) => {
    curCol &&
      curProjId &&
      dispatch(
        fetchAddNewTask({
          name,
          description,
          priority,
          colId: curCol,
          projId: curProjId,
        })
      );
  };

  const deleteTaskHandler = (colId: number, taskId: number) => {
    curProjId && dispatch(fetchDelTask({ projId: curProjId, colId, taskId }));
  };

  const deleteColumnHandler = (colId: number) => {
    curProjId && dispatch(fetchDelCol({ projId: curProjId, colId: colId }));
  };

  return (
    <div className={styles.kanbanMain}>
      <div className={styles.colCont}>
        {columns.map((col: IColumns) => {
          return (
            <Column
              key={v4()}
              col={col}
              delTask={deleteTaskHandler}
              setCurCol={setCurCol}
              setShowTaskModal={setShowTaskModal}
              setShowAddTaskModal={setShowAddTaskModal}
              delCol={deleteColumnHandler}
            />
          );
        })}
      </div>

      {showAddTaskModal && (
        <AddTaskModal
          show={showAddTaskModal}
          setShow={setShowAddTaskModal}
          onSubmit={addNewTaskHandler}
        />
      )}
    </div>
  );
};
