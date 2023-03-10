import React, { useEffect, useState } from 'react';
import { AddTaskModal } from '../../components/AddTaskModal/AddTaskModal';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { clearDashboardSlice } from '../../store/dashboard.slice';
import {
  fetchAddNewTask,
  fetchDelCol,
  fetchDelTask,
  fetchProjectDashboard,
  fetchProjectInfo,
} from '../../store/dashboard.thunk';
import styles from './ProjectPageMain.module.css';
import { Column, IColumns } from '../../components/Column';
import { v4 } from 'uuid';

interface ProjectPageMainProps {
  setShowTaskModal: (bool: boolean) => void;
}

export const ProjectPageMain: React.FC<ProjectPageMainProps> = ({
  setShowTaskModal,
}): JSX.Element => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const columns = useTypedSelector((state) => state.projectDashboard.columns);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [curCol, setCurCol] = useState<number | null>(null);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchProjectDashboard(params.id));
      dispatch(fetchProjectInfo(params.id));
    }

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

  const deleteColumnHandler = (colId: number) => {
    params.id && dispatch(fetchDelCol({ projId: params.id, colId: colId }));
  };

  return (
    <div className={styles.projMain}>
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
