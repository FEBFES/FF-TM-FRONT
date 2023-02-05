import React from 'react';
import './Column.scss';
import { IColumns, ITask } from '../../store/dashboard.type';
import { v4 } from 'uuid';
import { TaskCard } from '../TaskCard/TaskCard';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Draggable, Droppable } from 'react-beautiful-dnd';

interface ColumnProps {
  col: IColumns;
  delTask: (colId: number, taskId: number) => void;
  setShowAddTaskModal: (bool: boolean) => void;
  setCurCol: (colId: number) => void;
  delCol: (colId: number) => void;
  index: number;
}

export const Column: React.FC<ColumnProps> = ({
  col,
  delTask,
  setShowAddTaskModal,
  setCurCol,
  delCol,
  index,
}): JSX.Element => {
  return (
    <Draggable draggableId={`${col.id}`} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          draggable
          className={'colWrap'}
          key={v4()}
        >
          <div {...provided.dragHandleProps} className={'col__header'}>
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
          <Droppable droppableId={`${col.id}`} type={'task'}>
            {(provided, snapshot) => {
              return (
                <div
                  className={'col'}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {col?.tasks?.map((task: ITask, index) => {
                    return (
                      <TaskCard
                        index={index}
                        delTask={delTask}
                        key={v4()}
                        task={task}
                      />
                    );
                  })}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
