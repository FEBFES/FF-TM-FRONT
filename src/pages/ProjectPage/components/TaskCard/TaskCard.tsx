import React from 'react';
import styles from './TaskCard.module.css';
import { ITask } from '../../store/dashboard.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { delTaskFromCol } from '../../store/dashboard.slice';
import { useAppDispatch } from '../../../../hooks/redux';

interface TaskCardProps {
  task: ITask;
  delTask: (colId: number, taskId: number) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  delTask,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <div
      onDragStart={(e: any) => {
        e.target.classList.add(styles.taskDnD);
        e.dataTransfer.setData('task', JSON.stringify(task));

        setTimeout(() => {
          e.target.style.display = 'none';
          dispatch(delTaskFromCol(task));
        }, 0);
      }}
      onDragEnd={(e: any) => {
        // e.target.style.transform = 'rotate(0deg)'
      }}
      className={styles.task}
      draggable
      id={`${task.id}`}
    >
      <div className={styles.task__header}>
        <h4>#{task.id}</h4>
      </div>

      <div className={styles.task__main}>
        <h1>{task.name}</h1>
        <h2>{task.description}</h2>
      </div>

      <div className={styles.task__footer}>
        <div>
          <FontAwesomeIcon className={''} icon={faCommentAlt} size={'xs'} />
          <span>8</span>
        </div>
        <div>
          <FontAwesomeIcon className={''} icon={faPaperclip} size={'xs'} />
          <span>2</span>
        </div>
      </div>
    </div>
  );
};
