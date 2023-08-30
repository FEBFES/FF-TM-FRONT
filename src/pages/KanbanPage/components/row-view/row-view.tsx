import React from 'react';
import { SRowContainer } from './row-view.styled';
import { IColumns } from '../Column/Column.type';
import { v4 } from 'uuid';
import { Row } from '../row/row';

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
    <SRowContainer>
      {columns.map((row: IColumns) => {
        if (row.tasks.length === 0) {
          return null;
        }
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
    </SRowContainer>
  );
};
