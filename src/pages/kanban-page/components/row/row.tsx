import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ITask, IColumns } from '../index';
import { v4 } from 'uuid';
import { TaskRowCard } from '../task-row-card/task-row-card';
import { Button, Typography } from 'antd';
import { STaskAlert, SRowHeader, SRow } from './row.styled';

interface RowProps {
  row: IColumns;
  delTask: (colId: number, taskId: number) => void;
  setShowAddTaskModal: (bool: boolean) => void;
  setCurCol: (col: IColumns) => void;
  setShowTaskModal: (bool: boolean) => void;
}

export const Row: React.FC<RowProps> = ({
  row,
  delTask,
  setShowTaskModal,
  setShowAddTaskModal,
  setCurCol,
}): JSX.Element => {
  return (
    <SRow>
      <SRowHeader>
        <Typography>
          {row.name || ''} {row.tasks?.length !== 0 ? row.tasks?.length : null}
        </Typography>
        <Button
          onClick={() => {
            setShowAddTaskModal(true);
            setCurCol(row);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </SRowHeader>

      <div
        // todo добавить ДД
        // onDrop={(e) => dropHandler(e)}
        // onDragOver={dragOverHandler}
        id={`${row.id}`}
      >
        {row?.tasks?.map((task: ITask) => {
          return (
            <TaskRowCard
              delTask={delTask}
              setShowTaskModal={setShowTaskModal}
              key={v4()}
              task={task}
            />
          );
        })}

        {row?.tasks?.length === 0 && (
          <STaskAlert>
            <p>Задачи в {row?.name || ''} отсутсвуют</p>
          </STaskAlert>
        )}
      </div>
    </SRow>
  );
};
