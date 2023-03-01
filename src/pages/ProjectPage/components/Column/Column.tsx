import React, { useState } from 'react';
import styles from './Column.module.css';
import { IColumns, ITask } from '../../store/dashboard.type';
import { v4 } from 'uuid';
import { TaskCard } from '../TaskCard/TaskCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchChangeTask } from '../../store/dashboard.thunk';

interface ColumnProps {
  col: IColumns;
  delTask: (colId: number, taskId: number) => void;
  setShowAddTaskModal: (bool: boolean) => void;
  setCurCol: (colId: number) => void;
  delCol: (colId: number) => void;
  setShowTaskModal: (bool: boolean) => void;
}

export const Column: React.FC<ColumnProps> = ({
  col,
  delTask,
  setShowAddTaskModal,
  setCurCol,
  setShowTaskModal,
  delCol,
}): JSX.Element => {
  const [showAddTaskBtn, setShowAddTaskBtn] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  function dropHandler(e: any) {
    e.preventDefault();
    const curDragTask = JSON.parse(e.dataTransfer.getData('task'));
    dispatch(fetchChangeTask({ curDragTask, col }));
  }

  function dragOverHandler(e: any) {
    e.preventDefault();
  }

  return (
    <div
      onMouseLeave={() => setShowAddTaskBtn(false)}
      onMouseOver={() => setShowAddTaskBtn(true)}
      className={styles.colWrap}
      key={v4()}
    >
      <div className={styles.col__header}>
        <h1 className={styles.col__title}>
          {col.name} {col.tasks.length !== 0 && col.tasks.length}
        </h1>

        {showAddTaskBtn && (
          <FontAwesomeIcon
            className={styles.col__addTask_btn}
            icon={faPlus}
            onClick={() => {
              setShowAddTaskModal(true);
              setCurCol(col.id);
            }}
          />
        )}
      </div>

      <div
        onDrop={(e) => dropHandler(e)}
        onDragOver={dragOverHandler}
        className={styles.col}
        id={`${col.id}`}
      >
        {col?.tasks?.map((task: ITask) => {
          return (
            <TaskCard
              setShowTaskModal={setShowTaskModal}
              delTask={delTask}
              key={v4()}
              task={task}
            />
          );
        })}
      </div>
    </div>
  );
};
