import React from 'react';
import './Column.scss';
import { IColumns, ITask } from '../../store/dashboard.type';
import { v4 } from 'uuid';
import { TaskCard } from '../TaskCard/TaskCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
        <h1 className={'col__title'}>
          {col.name} {col.tasks.length !== 0 && col.tasks.length}
        </h1>

        <FontAwesomeIcon
          className={'col__addTask_btn'}
          icon={faPlus}
          onClick={() => {
            setShowAddTaskModal(true);
            setCurCol(col.id);
          }}
        />
      </div>

      <div className={'col'}>
        {col?.tasks?.map((task: ITask) => {
          return <TaskCard delTask={delTask} key={v4()} task={task} />;
        })}
      </div>
    </div>
  );
};
