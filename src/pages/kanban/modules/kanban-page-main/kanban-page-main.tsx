import React, { useState } from 'react';
import { AddTaskModal } from '../add-task-modal/add-task-modal';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
// import {
//   fetchAddNewTask,
//   fetchDelTask,
// } from '../../../../__data__/middleware/kanban.thunk';
import {
  ColumnView,
  RowView,
  IColumns,
  ITypeSelectType,
  IPriorityType,
} from '../../components';
import { SKanbanMain } from './kanban-page-main.styled';

interface KanbanPageProps {
  setShowTaskModal: (bool: boolean) => void;
}

export const KanbanPageMain: React.FC<KanbanPageProps> = ({
  setShowTaskModal,
}) => {
  // const dispatch = useAppDispatch();
  // const columns = useTypedSelector((state) => state.curProj.columns);
  // const curProjId = useTypedSelector((state) => state.curProj.projId);
  // const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  // const [curCol, setCurCol] = useState<IColumns | null>(null);
  // const curView = useTypedSelector((state) => state.curProj.curView);

  // const addNewTaskHandler = (
  //   name: string,
  //   description: string,
  //   priority: IPriorityType,
  //   type: ITypeSelectType,
  //   assigneeId: number | null | undefined
  // ) => {
  //   curCol &&
  //     curProjId &&
  //     dispatch(
  //       fetchAddNewTask({
  //         name,
  //         description,
  //         priority,
  //         type,
  //         colId: curCol.id,
  //         projId: curProjId,
  //         assigneeId: assigneeId,
  //       })
  //     );
  // };

  // const deleteTaskHandler = (colId: number, taskId: number) => {
  //   curProjId &&
  //     dispatch(fetchDelTask({ projId: curProjId, colId, taskId })).finally(
  //       () => {
  //         setShowTaskModal(false);
  //       }
  //     );
  // };

  return <div></div>;
  // return (
  //   <SKanbanMain>
  //     {curView === 'kanban' ? (
  //       <ColumnView
  //         columns={columns}
  //         deleteTaskHandler={deleteTaskHandler}
  //         setCurCol={setCurCol}
  //         setShowTaskModal={setShowTaskModal}
  //         setShowAddTaskModal={setShowAddTaskModal}
  //       />
  //     ) : (
  //       <RowView
  //         columns={columns}
  //         deleteTaskHandler={deleteTaskHandler}
  //         setCurCol={setCurCol}
  //         setShowTaskModal={setShowTaskModal}
  //         setShowAddTaskModal={setShowAddTaskModal}
  //       />
  //     )}

  //     {showAddTaskModal && (
  //       <AddTaskModal
  //         show={showAddTaskModal}
  //         setShow={setShowAddTaskModal}
  //         onSubmit={addNewTaskHandler}
  //         curCol={curCol}
  //       />
  //     )}
  //   </SKanbanMain>
  // );
};
