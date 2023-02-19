import React, { useState } from 'react';
import styles from './TaskCard.module.css';
import { ITask } from '../../store/dashboard.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { DropDown } from '../../../../ui/DropDown/DropDown';

interface TaskCardProps {
  task: ITask;
  delTask: (colId: number, taskId: number) => void;
  setCurDragTask: (tast: any) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  delTask,
  setCurDragTask,
}): JSX.Element => {
  const [isOpenDropDown, setOpenDropDown] = useState<boolean>(false);
  const DropDownButtonsName = ['delete', 'change'];

  const OpenDropDown = () => {
    setOpenDropDown(prevState => !prevState);
  };

  return (
    <div
      onDragStart={(e) => {
        setCurDragTask(task);
      }}
      className={styles.task}
      draggable
      id={`${task.id}`}
      onDoubleClick={OpenDropDown}
    >
      <div className={styles.task__header}>
        <h4>#{task.id}</h4>
      </div>

      <div className={styles.task__header}>
        <h4>#{task.id}</h4>
        <DropDown
          isOpenDropDown={isOpenDropDown}
          children={DropDownButtonsName}
        />
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
