import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { v4 } from 'uuid';
import {
  fetchAddNewTask,
  fetchProjectDashboard,
} from './store/dashboard.thunk';
import { IColumns, ITask } from './store/dashboard.type';
import './ProjectPage.scss';
import { clearDashboardSlice } from './store/dashboard.slice';
import { AddTaskModal } from './components/AddTaskModal/AddTaskModal';

export const ProjectPage: React.FC = (): JSX.Element => {
  const params = useParams();
  const dispatch = useAppDispatch();
  //todo переписать и убрать найм и деск из стора колонки
  const { projectName, projectDesc } = useTypedSelector(
    (state) => state.projectColumns
  );
  const columns = useTypedSelector((state) => state.projectColumns.columns);
  const isLoading = useTypedSelector((state) => state.projectColumns.isLoading);
  const errorMsg = useTypedSelector((state) => state.projectColumns.errorMsg);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [curCol, setCurCol] = useState<number | null>(null);

  useEffect(() => {
    return () => {
      dispatch(clearDashboardSlice());
    };
  }, [dispatch]);

  useEffect(() => {
    params.id && dispatch(fetchProjectDashboard(params.id));
  }, [params.id, dispatch]);

  const addNewTaskHandler = (name: string, description: string) => {
    curCol &&
      params.id &&
      dispatch(
        fetchAddNewTask({ name, description, colId: curCol, projId: params.id })
      );
  };

  return (
    <div className={'projpage'}>
      <header>
        <div>
          <h1>{projectName}</h1>
          <h2>{projectDesc}</h2>
        </div>

        <button>Add new column</button>
      </header>

      <div className={'col-cont'}>
        {isLoading && <div>LOADING....</div>}
        {errorMsg && <div>ОШИБКА - {errorMsg}</div>}
        {!columns.length && <div>нету данных</div>}
        {columns.map((col: IColumns) => {
          return (
            <div className={'colWrap'} key={v4()}>
              <span>name col - {col.name}</span>
              <button
                onClick={() => {
                  setShowAddTaskModal(true);
                  setCurCol(col.id);
                }}
              >
                add new +
              </button>
              <div className={'col'}>
                {col.tasks.map((task: ITask) => {
                  return (
                    <div key={v4()} className={'task'}>
                      <h1>{task.name}</h1>
                      <h2>{task.description}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <AddTaskModal
        show={showAddTaskModal}
        setShow={setShowAddTaskModal}
        onSubmit={addNewTaskHandler}
      />
    </div>
  );
};
