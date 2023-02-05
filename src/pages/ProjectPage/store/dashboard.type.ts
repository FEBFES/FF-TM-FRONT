export interface IDashboard {
  name: string;
  description: string;
  columns: IColumns[];
}

export interface IColumns {
  id: number;
  name: string;
  order: number;
  tasks: ITask[];
  columnOrder: number;
}

export interface ITask {
  id: number;
  columnId: number;
  description: string;
  name: string;
}
