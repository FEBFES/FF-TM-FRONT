import { IPriorityType } from '../PrioritySelect/PrioritySelect.type';
import { ITypeSelectType } from '../TypeSelect/TypeSelect';

export interface AddTaskModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
  onSubmit: (
    name: string,
    description: string,
    priority: IPriorityType,
    type: ITypeSelectType
  ) => void;
}
