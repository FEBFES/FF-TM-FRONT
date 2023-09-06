import React from 'react';
import { IColumns } from '../column/column';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ITask } from '../task-card/task-card.type';
import { v4 } from 'uuid';
import { TaskRowCard } from '../task-row-card/task-row-card';
import { Button, Title } from '../../../../ui';
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
        <Title level={'h6'}>
          {row.name || ''} {row.tasks?.length !== 0 ? row.tasks?.length : null}
        </Title>
        <Button
          onClick={() => {
            setShowAddTaskModal(true);
            setCurCol(row);
          }}
          variant={'primary'}
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
