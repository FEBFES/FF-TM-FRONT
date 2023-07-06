import { ITask } from '../TaskCard';

export interface IColumns {
  projectId: number;
  id: number;
  name: string;
  columnOrder: number;
  tasks: ITask[];
}
