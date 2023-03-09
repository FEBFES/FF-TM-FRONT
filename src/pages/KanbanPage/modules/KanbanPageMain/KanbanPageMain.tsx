import React, { useEffect, useState } from 'react';
import { AddTaskModal } from '../../components/AddTaskModal/AddTaskModal';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import {clearKanbanSlice, delTaskFromCol} from '../../store/kanban.slice';
import {
  fetchAddNewTask, fetchChangeTask,
  fetchDelCol,
  fetchDelTask,
  fetchProjectDashboard,
  fetchProjectInfo,
} from '../../store/kanban.thunk';
import styles from './KanbanPageMain.module.css';
import { Column, IColumns } from '../../components/Column';
import { v4 } from 'uuid';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

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

  const addNewTaskHandler = (name: string, description: string) => {
    curCol &&
      curProjId &&
      dispatch(
        fetchAddNewTask({ name, description, colId: curCol, projId: curProjId })
      );
  };

  const deleteTaskHandler = (colId: number, taskId: number) => {
    curProjId && dispatch(fetchDelTask({ projId: curProjId, colId, taskId }));
  };

  const deleteColumnHandler = (colId: number) => {
    curProjId && dispatch(fetchDelCol({ projId: curProjId, colId: colId }));
  };

  const dropHandler = (test: any) => {
    console.log(test)
    dispatch(delTaskFromCol({
      columnId: +test.source.droppableId,
      id: +test.draggableId
    }))
    // dispatch(fetchChangeTask({ test.draggableId, test.destination.droppableId }));
  }

  return (
    <div className={styles.kanbanMain}>
        <DragDropContext onDragEnd={dropHandler}>
          <Droppable
              droppableId={`all-columns`}
              direction={'horizontal'}
              type={'column'}
          >
            {(provided) => (
                <div
                    className={styles.colCont}
                >

                  {columns.map((col: IColumns) => (
                      <Droppable
                          droppableId={`${col.id}`}
                          // direction={'horizontal'}
                          type={'task'}
                      >
                        {(provided) => (

                            <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                          <Column
                              key={v4()}
                              col={col}
                              delTask={deleteTaskHandler}
                              setCurCol={setCurCol}
                              setShowTaskModal={setShowTaskModal}
                              setShowAddTaskModal={setShowAddTaskModal}
                              delCol={deleteColumnHandler}
                          />
                        </div>
                            )}
                      </Droppable>
                  ))}
                  {provided.placeholder}
                </div>
            )}
          </Droppable>
        </DragDropContext>

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
