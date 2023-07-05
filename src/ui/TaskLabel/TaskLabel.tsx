import React from 'react';
import { TaskLabelProps } from './TaskLabel.props';
import classNames from 'classnames';
import styles from '../../pages/KanbanPage/components/TaskCard/TaskCard.module.css';

export const TaskLabel: React.FC<TaskLabelProps> = ({ type }): JSX.Element => {
  return (
    <>
      {type !== 'NONE' && type && (
        <div
          className={classNames(`${styles.task_label}`, {
            [styles.task_label_q]: type === 'QUESTION',
            [styles.task_label_r]: type === 'RESEARCH',
            [styles.task_label_b]: type === 'BUG',
            [styles.task_label_f]: type === 'FEATURE',
          })}
        >
          {type.toLowerCase()}
        </div>
      )}
    </>
  );
};