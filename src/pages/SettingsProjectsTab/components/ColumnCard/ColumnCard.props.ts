import { IColumns } from '../../../KanbanPage/components/Column/Column.type';

export interface ColumnCardProps {
  column: IColumns;
  onDelete: (projId: number, colId: number) => void;
}
