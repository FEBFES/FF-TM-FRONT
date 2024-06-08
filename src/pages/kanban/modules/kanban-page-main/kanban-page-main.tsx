import React, { useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { IColumns, Row, Column } from '../../components';
import {
  SColumnContainer,
  SKanbanMain,
  SRowContainer,
} from './kanban-page-main.styled';
import { v4 } from 'uuid';

interface KanbanPageProps {
  setShowTaskModal: (bool: boolean) => void;
}

export const KanbanPageMain: React.FC<KanbanPageProps> = ({
  setShowTaskModal,
}) => {
  const dispatch = useAppDispatch();
  const columns = useTypedSelector((state) => state.kanban.columns);
  const curProjId = useTypedSelector((state) => state.kanban.projId);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [curCol, setCurCol] = useState<IColumns | null>(null);
  const curView = 'kanban';

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
  return (
    <SKanbanMain>
      {curView === 'kanban' ? (
        <SColumnContainer className={'scrollbar'}>
          {columns.map((col: IColumns, index: number) => {
            return (
              <Column
                index={index}
                key={v4()}
                col={col}
                delTask={() => {}}
                setCurCol={setCurCol}
                setShowTaskModal={setShowTaskModal}
                setShowAddTaskModal={setShowAddTaskModal}
              />
            );
          })}
        </SColumnContainer>
      ) : (
        <SRowContainer>
          {columns?.map((row: IColumns) => {
            return (
              <Row
                key={v4()}
                row={row}
                delTask={() => {}}
                setCurCol={setCurCol}
                setShowTaskModal={setShowTaskModal}
                setShowAddTaskModal={setShowAddTaskModal}
              />
            );
          })}
        </SRowContainer>
      )}

      {/* {showAddTaskModal && (
				// <AddTaskModal
				// 	show={showAddTaskModal}
				// 	setShow={setShowAddTaskModal}
				// 	onSubmit={addNewTaskHandler}
				// 	curCol={curCol}
				// />
			// )} */}
    </SKanbanMain>
  );
};
