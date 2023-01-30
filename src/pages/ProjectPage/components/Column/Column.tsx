import React from 'react';
import './Column.scss';
import { IColumns, ITask } from '../../store/dashboard.type';
import { v4 } from 'uuid';
import { TaskCard } from '../TaskCard/TaskCard';

interface ColumnProps {
  col: IColumns;
  delTask: (colId: number, taskId: number) => void;
  setShowAddTaskModal: (bool: boolean) => void;
  setCurCol: (colId: number) => void;
  delCol: (colId: number) => void;
}

export const Column: React.FC<ColumnProps> = ({
  col,
  delTask,
  setShowAddTaskModal,
  setCurCol,
  delCol,
}): JSX.Element => {
  return (
    <div className={'colWrap'} key={v4()}>
      <div className={'col__header'}>
        <h1>{col.name}</h1>
        <button onClick={() => delCol(col.id)}>del</button>
      </div>
      <button
        onClick={() => {
          setShowAddTaskModal(true);
          setCurCol(col.id);
        }}
      >
        add new task
      </button>
      <div className={'col'}>
        {col?.tasks?.map((task: ITask) => {
          return <TaskCard delTask={delTask} key={v4()} task={task} />;
        })}
      </div>
    </div>
  );
};
