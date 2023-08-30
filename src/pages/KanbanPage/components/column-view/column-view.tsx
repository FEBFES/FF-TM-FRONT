import React from 'react';
import { IColumns } from '../column/column';
import { Column } from '../column/column';
import { v4 } from 'uuid';
import { SColumnContainer } from './column-view.styled';

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
    <SColumnContainer className={'scrollbar'}>
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
    </SColumnContainer>
  );
};
