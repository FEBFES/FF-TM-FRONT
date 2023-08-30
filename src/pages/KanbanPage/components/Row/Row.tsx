import React from 'react';
import styles from './Row.module.css';
import { IColumns } from '../Column/Column.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ITask } from '../TaskCard/TaskCard.type';
import { v4 } from 'uuid';
import { TaskRowCard } from '../TaskRowCard/TaskRowCard';
import { Button } from '../../../../ui/Button/Button';
import { Title } from '../../../../ui/typography';

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
    <div className={styles.row}>
      <div className={styles.row__header}>
        <Title level={'h6'} className={styles.row__title}>
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
      </div>

      <div
        // todo добавить ДД
        // onDrop={(e) => dropHandler(e)}
        // onDragOver={dragOverHandler}
        className={styles.col}
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
          <div className={styles.tasksEmptyAlert}>
            <p>Задачи в {row?.name || ''} отсутсвуют</p>
          </div>
        )}
      </div>
    </div>
  );
};
