import React from 'react';
import './Column.scss';
import { IColumns, ITask } from '../../store/dashboard.type';
import { v4 } from 'uuid';
import { TaskCard } from '../TaskCard/TaskCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../../../hooks/redux';
import { addTaskToCol, delTaskFromCol } from '../../store/dashboard.slice';
import {fetchChangeTask} from "../../store/dashboard.thunk";

interface ColumnProps {
  col: IColumns;
  delTask: (colId: number, taskId: number) => void;
  setShowAddTaskModal: (bool: boolean) => void;
  setCurCol: (colId: number) => void;
  delCol: (colId: number) => void;
  setCurDragTask: (task: ITask) => void;
  curDragTask: ITask | null;
}

export const Column: React.FC<ColumnProps> = ({
  col,
  delTask,
  setShowAddTaskModal,
  setCurCol,
  delCol,
  curDragTask,
  setCurDragTask,
}): JSX.Element => {
  const dispatch = useAppDispatch();

  function dropHandler(e: any) {
    e.preventDefault();
    if (curDragTask && curDragTask?.columnId !== col.id) {
      dispatch(fetchChangeTask({curDragTask, col}))
    }
  }

  function dragOverHandler(e: any) {
    e.preventDefault();
  }

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

      <div
        onDrop={(e) => dropHandler(e)}
        onDragOver={dragOverHandler}
        className={'col'}
        id={`${col.id}`}
      >
        {col?.tasks?.map((task: ITask) => {
          return (
            <TaskCard
              setCurDragTask={setCurDragTask}
              delTask={delTask}
              key={v4()}
              task={task}
            />
          );
        })}
      </div>
    </div>
  );
};
