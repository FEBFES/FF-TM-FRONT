import { ITask } from '../TaskCard';

export interface IColumns {
  projectId: number;
  id: number;
  name: string;
  order: number;
  tasks: ITask[];
}
