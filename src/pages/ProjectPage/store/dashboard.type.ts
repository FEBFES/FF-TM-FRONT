export interface IDashboard {
  name: string;
  description: string;
  columns: IColumns[];
}

export interface IColumns {
  projectId: number;
  id: number;
  name: string;
  order: number;
  tasks: ITask[];
}

export interface ITask {
  id: number;
  columnId: number;
  description: string;
  name: string;
  ownerId: number;
  projectId: number;
}
