import React from 'react';
import styles from './RowView.module.css';
import { IColumns } from '../Column/Column.type';
import { v4 } from 'uuid';
import { Row } from '../Row/Row';

interface RowViewProps {
  columns: IColumns[];
  deleteTaskHandler: any;
  setCurCol: any;
  setShowTaskModal: any;
  setShowAddTaskModal: any;
}

export const RowView: React.FC<RowViewProps> = ({
  columns,
  deleteTaskHandler,
  setCurCol,
  setShowTaskModal,
  setShowAddTaskModal,
}): JSX.Element => {
  return (
    <div className={styles.rowCont}>
      {columns.map((row: IColumns) => {
        return (
          <Row
            key={v4()}
            row={row}
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
