import React from 'react';
import './TaskCard.scss';
import { ITask } from '../../store/dashboard.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface TaskCardProps {
  task: ITask;
  delTask: (colId: number, taskId: number) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  delTask,
}): JSX.Element => {
  return (
    <div className={'task'}>
      <h1>{task.name}</h1>
      <h2>{task.description}</h2>
      <FontAwesomeIcon
        className={'delete__btn'}
        icon={faTrash}
        size={'sm'}
        onClick={() => delTask(task.columnId, task.id)}
      />
    </div>
  );
};
