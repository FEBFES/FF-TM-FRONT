import React, { useState } from 'react';
import { AddTaskModal } from '../../components/AddTaskModal/AddTaskModal';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { fetchAddNewTask, fetchDelTask } from '../../store/kanban.thunk';
import styles from './KanbanPageMain.module.css';
import { IPriorityType } from '../../components/PrioritySelect/PrioritySelect.type';
import { ITypeSelectType } from '../../components/TypeSelect/TypeSelect';
import { IColumns } from '../../components/Column/Column.type';
import { ColumnView } from '../../components/ColumnView/ColumnView';
import { RowView } from '../../components/RowView/RowView';

interface KanbanPageProps {
  setShowTaskModal: (bool: boolean) => void;
  curView: 'row' | 'col';
}

export const KanbanPageMain: React.FC<KanbanPageProps> = ({
  curView,
  setShowTaskModal,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const columns = useTypedSelector((state) => state.projectKanban.columns);
  const curProjId =
    useTypedSelector((state) => state.projects.curProj)?.id ||
    Number(localStorage.getItem('curProj'));
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [curCol, setCurCol] = useState<IColumns | null>(null);

  const addNewTaskHandler = (
    name: string,
    description: string,
    priority: IPriorityType,
    type: ITypeSelectType,
    assigneeId: number | null | undefined
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
          assigneeId: assigneeId,
        })
      );
  };

  const deleteTaskHandler = (colId: number, taskId: number) => {
    curProjId && dispatch(fetchDelTask({ projId: curProjId, colId, taskId }));
  };

  return (
    <div className={styles.kanbanMain}>
      {curView === 'col' ? (
        <ColumnView
          columns={columns}
          deleteTaskHandler={deleteTaskHandler}
          setCurCol={setCurCol}
          setShowTaskModal={setShowTaskModal}
          setShowAddTaskModal={setShowAddTaskModal}
        />
      ) : (
        <RowView
          columns={columns}
          deleteTaskHandler={deleteTaskHandler}
          setCurCol={setCurCol}
          setShowTaskModal={setShowTaskModal}
          setShowAddTaskModal={setShowAddTaskModal}
        />
      )}

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
