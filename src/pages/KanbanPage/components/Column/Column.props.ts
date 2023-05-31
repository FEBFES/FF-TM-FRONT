import { IColumns } from './Column.type';

export interface ColumnProps {
  col: IColumns;
  delTask: (colId: number, taskId: number) => void;
  setShowAddTaskModal: (bool: boolean) => void;
  setCurCol: (colId: number) => void;
  setShowTaskModal: (bool: boolean) => void;
}
