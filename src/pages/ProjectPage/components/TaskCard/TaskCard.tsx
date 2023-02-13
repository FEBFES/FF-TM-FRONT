import React from 'react';
import './TaskCard.scss';
import { ITask } from '../../store/dashboard.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faPaperclip } from '@fortawesome/free-solid-svg-icons';

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
  return (
    <div
      onDragStart={(e) => {
        setCurDragTask(task);
      }}
      className={'task'}
      draggable
      id={`${task.id}`}
    >
      <div className={'task__header'}>
        <h4>#{task.id}</h4>
      </div>

      <div className={'task__main'}>
        <h1>{task.name}</h1>
        <h2>{task.description}</h2>
      </div>

      <div className={'task__footer'}>
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
