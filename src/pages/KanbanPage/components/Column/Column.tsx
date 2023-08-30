import React from 'react';
import styles from './Column.module.css';
import { v4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchChangeTask } from '../../store/kanban.thunk';
import { TaskCard } from '../TaskCard/TaskCard';
import { ITask } from '../TaskCard/TaskCard.type';
import { Title } from '../../../../ui/typography';
import { IColumns } from './Column.type';

export interface ColumnProps {
  col: IColumns;
  delTask: (colId: number, taskId: number) => void;
  setShowAddTaskModal: (bool: boolean) => void;
  setCurCol: (col: IColumns) => void;
  setShowTaskModal: (bool: boolean) => void;
}

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
        <Title level={'h6'}>
          {col.name || ''} {col.tasks?.length !== 0 ? col.tasks?.length : null}
        </Title>
        <FontAwesomeIcon
          className={styles.col__addTask_btn}
          icon={faPlus}
          onClick={() => {
            setShowAddTaskModal(true);
            setCurCol(col);
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
