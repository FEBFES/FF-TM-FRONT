import React from 'react';
import styles from './Column.module.css';
import { v4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchChangeTask } from '../../store/kanban.thunk';
import { ColumnProps } from './Column.props';
import { TaskCard } from '../TaskCard/TaskCard';
import { ITask } from '../TaskCard/TaskCard.type';

export const Column: React.FC<ColumnProps> = ({
  col,
  delTask,
  setShowAddTaskModal,
  setCurCol,
  setShowTaskModal,
}): JSX.Element => {
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
    <div className={styles.colWrap} key={v4()}>
      <div className={styles.col__header}>
        <h1 className={styles.col__title}>
          {col.name || ''} {col.tasks?.length !== 0 ? col.tasks?.length : null}
        </h1>
        <FontAwesomeIcon
          className={styles.col__addTask_btn}
          icon={faPlus}
          onClick={() => {
            setShowAddTaskModal(true);
            setCurCol(col.id);
          }}
        />
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
              delTask={delTask}
              setShowTaskModal={setShowTaskModal}
              key={v4()}
              task={task}
            />
          );
        })}
      </div>
    </div>
  );
};
