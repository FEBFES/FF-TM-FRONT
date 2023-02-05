import React from 'react';
import './Column.scss';
import { IColumns, ITask } from '../../store/dashboard.type';
import { v4 } from 'uuid';
import { TaskCard } from '../TaskCard/TaskCard';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

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
          <div className={'circle'} />
          {col.name}
        </h1>
        <FontAwesomeIcon
          size={'sm'}
          icon={faEllipsisV}
          onClick={() => delCol(col.id)}
        />
      </div>
      <FontAwesomeIcon
        size={'sm'}
        icon={faPlus}
        className={'deleteBtn'}
        onClick={() => {
          setShowAddTaskModal(true);
          setCurCol(col.id);
        }}
      />
      <div className={'col'}>
        {col?.tasks?.map((task: ITask) => {
          return <TaskCard delTask={delTask} key={v4()} task={task} />;
        })}
      </div>
    </div>
  );
};
