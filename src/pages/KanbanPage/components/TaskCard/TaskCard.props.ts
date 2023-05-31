import { ITask } from './TaskCard.type';

export interface TaskCardProps {
  task: ITask;
  delTask: any;
  setShowTaskModal: (bool: boolean) => void;
}
