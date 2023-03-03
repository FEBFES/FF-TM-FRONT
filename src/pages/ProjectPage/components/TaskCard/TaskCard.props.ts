import { ITask } from './TaskCard.type';

export interface TaskCardProps {
  task: ITask;
  delTask: (colId: number, taskId: number) => void;
  setShowTaskModal: (bool: boolean) => void;
}
