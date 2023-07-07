import { IColumns } from '../../../KanbanPage/components/Column';

export interface ColumnCardProps {
  column: IColumns;
  onDelete: (projId: number, colId: number) => void;
}
