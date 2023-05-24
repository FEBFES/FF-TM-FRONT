import { IPriorityType } from '../PrioritySelect/PrioritySelect.type';

export interface AddTaskModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
  onSubmit: (
    name: string,
    description: string,
    priority: IPriorityType
  ) => void;
}
