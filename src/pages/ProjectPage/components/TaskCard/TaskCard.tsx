import React, { useState } from 'react';
import './TaskCard.scss';
import { ITask } from '../../store/dashboard.type';

interface TaskCardProps {
  task: ITask;
  delTask: (colId: number, taskId: number) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  delTask,
}): JSX.Element => {
  const [showDelBtn, setShowDelBtn] = useState(false);

  return (
    <div
      onMouseOver={() => setShowDelBtn(true)}
      onMouseLeave={() => setShowDelBtn(false)}
      className={'task'}
    >
      <h1>{task.name}</h1>
      <h2>{task.description}</h2>
      {showDelBtn && (
        <button onClick={() => delTask(task.columnId, task.id)}>delete</button>
      )}
    </div>
  );
};
