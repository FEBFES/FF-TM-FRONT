import React from 'react';
import styles from './TaskCard.module.css';
import { ITask } from '../../store/dashboard.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import DropDown from '../DropDown/DropDown';

interface TaskCardProps {
  task: ITask;
  delTask: (colId: number, taskId: number) => void;
  setCurDragTask: (tast: any) => void;
  isOpen: boolean;
  setOpen: (e: boolean) => void;
  curDragTask: ITask | null;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  delTask,
  setCurDragTask,
  isOpen,
  setOpen,
  curDragTask,
}): JSX.Element => {
  return (
    <div
      onDragStart={(e) => {
        setCurDragTask(task);
      }}
      onMouseOver={(e) => {
        setCurDragTask(task);
      }}
      className={styles.task}
      draggable
      id={`${task.id}`}
      onDoubleClick={(e) => {
        setOpen(!isOpen);
      }}
      onMouseLeave={(e) => {
        setOpen(false);
        setCurDragTask(null);
      }}
    >
      <div className={styles.task__header}>
        <h4>#{task.id}</h4>
        {isOpen && task.id === curDragTask?.id ? <DropDown /> : null}
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
