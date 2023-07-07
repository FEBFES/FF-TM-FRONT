import { ITask } from '../TaskCard/TaskCard.type';

export interface IColumns {
  projectId: number;
  id: number;
  name: string;
  columnOrder: number;
  tasks: ITask[];
}
