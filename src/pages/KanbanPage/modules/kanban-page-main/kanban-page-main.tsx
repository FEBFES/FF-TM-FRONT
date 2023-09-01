import React, { useState } from 'react';
import { AddTaskModal } from '../../components/AddTaskModal/AddTaskModal';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { fetchAddNewTask, fetchDelTask } from '../../store/kanban.thunk';
import { IPriorityType } from '../../components/priority-select/priority-select';
import { ITypeSelectType } from '../../components/TypeSelect/TypeSelect';
import { IColumns } from '../../components/column/column';
import { ColumnView } from '../../components/column-view/column-view';
import { RowView } from '../../components/row-view/row-view';
import { SKanbanMain } from './kanban-page-main.styled';

interface KanbanPageProps {
  setShowTaskModal: (bool: boolean) => void;
}

export const KanbanPageMain: React.FC<KanbanPageProps> = ({
  setShowTaskModal,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const columns = useTypedSelector((state) => state.curProj.columns);
  const curProjId = useTypedSelector((state) => state.curProj.projId);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [curCol, setCurCol] = useState<IColumns | null>(null);
  const curView = useTypedSelector((state) => state.curProj.curView);

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
    curProjId &&
      dispatch(fetchDelTask({ projId: curProjId, colId, taskId })).finally(
        () => {
          setShowTaskModal(false);
        }
      );
  };

  return (
    <SKanbanMain>
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
    </SKanbanMain>
  );
};
