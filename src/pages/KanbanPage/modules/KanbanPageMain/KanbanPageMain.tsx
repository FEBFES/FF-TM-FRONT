import React, { useEffect, useState } from 'react';
import { AddTaskModal } from '../../components/AddTaskModal/AddTaskModal';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import {
  fetchAddNewTask,
  fetchDelTask,
  fetchProjectDashboard,
  fetchProjectInfo,
} from '../../store/kanban.thunk';
import styles from './KanbanPageMain.module.css';
import { v4 } from 'uuid';
import { IPriorityType } from '../../components/PrioritySelect/PrioritySelect.type';
import { ITypeSelectType } from '../../components/TypeSelect/TypeSelect';
import { IColumns } from '../../components/Column/Column.type';
import { Column } from '../../components/Column/Column';

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
  const [curCol, setCurCol] = useState<IColumns | null>(null);

  useEffect(() => {
    if (curProjId) {
      dispatch(fetchProjectDashboard({ projId: curProjId }));
      dispatch(fetchProjectInfo(curProjId));
    }

    // return () => {
    //   dispatch(clearKanbanSlice());
    // };
  }, [curProjId, dispatch]);

  const addNewTaskHandler = (
    name: string,
    description: string,
    priority: IPriorityType,
    type: ITypeSelectType
  ) => {
    curCol &&
      curProjId &&
      dispatch(
        fetchAddNewTask({
          name,
          description,
          priority,
          type,
          colId: curCol.id,
          projId: curProjId,
        })
      );
  };

  const deleteTaskHandler = (colId: number, taskId: number) => {
    curProjId && dispatch(fetchDelTask({ projId: curProjId, colId, taskId }));
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
            />
          );
        })}
      </div>

      {showAddTaskModal && (
        <AddTaskModal
          show={showAddTaskModal}
          setShow={setShowAddTaskModal}
          onSubmit={addNewTaskHandler}
          curCol={curCol}
        />
      )}
    </div>
  );
};
