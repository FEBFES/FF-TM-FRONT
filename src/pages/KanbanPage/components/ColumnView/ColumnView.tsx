import React from 'react';
import styles from './ColumnView.module.css';
import { IColumns } from '../Column/Column.type';
import { Column } from '../Column/Column';
import { v4 } from 'uuid';

interface ColumnViewProps {
  columns: IColumns[];
  deleteTaskHandler: any;
  setCurCol: any;
  setShowTaskModal: any;
  setShowAddTaskModal: any;
}

export const ColumnView: React.FC<ColumnViewProps> = ({
  columns,
  deleteTaskHandler,
  setCurCol,
  setShowTaskModal,
  setShowAddTaskModal,
}): JSX.Element => {
  return (
    <div className={styles.colCont}>
      {columns.map((col: IColumns) => {
        return (
          <Column
            key={v4()}
            col={col}
            delTask={deleteTaskHandler}
            setCurCol={setCurCol}
            setShowTaskModal={setShowTaskModal}
            setShowAddTaskModal={setShowAddTaskModal}
          />
        );
      })}
    </div>
  );
};
