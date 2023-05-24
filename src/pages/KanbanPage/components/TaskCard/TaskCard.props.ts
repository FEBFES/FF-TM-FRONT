import { ITask } from './TaskCard.type';

export interface TaskCardProps {
  task: ITask;
  setShowTaskModal: (bool: boolean) => void;
}
