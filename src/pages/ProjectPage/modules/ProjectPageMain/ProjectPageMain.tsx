import React, { useEffect, useState } from 'react';
import { IColumns, ITask } from '../../store/dashboard.type';
import { v4 } from 'uuid';
import { TaskCard } from '../../components/TaskCard/TaskCard';
import { AddTaskModal } from '../../components/AddTaskModal/AddTaskModal';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { clearDashboardSlice } from '../../store/dashboard.slice';
import {
  fetchAddNewTask,
  fetchDelTask,
  fetchProjectDashboard,
} from '../../store/dashboard.thunk';
import './ProjectPageMain.scss';

export const ProjectPageMain: React.FC = (): JSX.Element => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const columns = useTypedSelector((state) => state.projectColumns.columns);
  const isLoading = useTypedSelector((state) => state.projectColumns.isLoading);
  const errorMsg = useTypedSelector((state) => state.projectColumns.errorMsg);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [curCol, setCurCol] = useState<number | null>(null);

  useEffect(() => {
    params.id && dispatch(fetchProjectDashboard(params.id));

    return () => {
      dispatch(clearDashboardSlice());
    };
  }, [params.id, dispatch]);

  const addNewTaskHandler = (name: string, description: string) => {
    curCol &&
      params.id &&
      dispatch(
        fetchAddNewTask({ name, description, colId: curCol, projId: params.id })
      );
  };

  const deleteTaskHandler = (colId: number, taskId: number) => {
    params.id && dispatch(fetchDelTask({ projId: params.id, colId, taskId }));
  };

  return (
    <div className={'col-cont'}>
      {isLoading && <div>LOADING....</div>}
      {errorMsg && <div>ОШИБКА - {errorMsg}</div>}
      {!columns.length && <div>нету данных</div>}
      {columns.map((col: IColumns) => {
        return (
          <div className={'colWrap'} key={v4()}>
            <h1>{col.name}</h1>
            <button
              onClick={() => {
                setShowAddTaskModal(true);
                setCurCol(col.id);
              }}
            >
              add new task
            </button>
            <div className={'col'}>
              {col.tasks.map((task: ITask) => {
                return (
                  <TaskCard
                    delTask={deleteTaskHandler}
                    key={v4()}
                    task={task}
                  />
                );
              })}
            </div>
          </div>
        );
      })}

      <AddTaskModal
        show={showAddTaskModal}
        setShow={setShowAddTaskModal}
        onSubmit={addNewTaskHandler}
      />
    </div>
  );
};
