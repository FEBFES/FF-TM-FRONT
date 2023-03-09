import React, { useState } from 'react';
import styles from './Column.module.css';
import { v4 } from 'uuid';
import { TaskCard, ITask } from '../TaskCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ColumnProps } from './Column.props';

export const Column: React.FC<ColumnProps> = ({
  col,
  delTask,
  setShowAddTaskModal,
  setCurCol,
  setShowTaskModal,
  delCol,
}): JSX.Element => {
  const [showAddTaskBtn, setShowAddTaskBtn] = useState<boolean>(false);

  return (
        <div
          className={styles.colWrap}
        >
          <div className={styles.col__header}>
            <h1 className={styles.col__title}>
              {col.name || ''}{' '}
              {col.tasks.length !== 0 ? col.tasks.length : null}
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
          <div className={styles.col} id={`${col.id}`}>
            {col?.tasks?.map((task: ITask, i: number) => {
              return (
                <TaskCard
                  index={i}
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
