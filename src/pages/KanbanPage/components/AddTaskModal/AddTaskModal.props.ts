import { IPriorityType } from '../PrioritySelect/PrioritySelect.type';
import { ITypeSelectType } from '../TypeSelect/TypeSelect';
import { IColumns } from '../Column/Column.type';

export interface AddTaskModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
  curCol: IColumns | null;
  onSubmit: (
    name: string,
    description: string,
    priority: IPriorityType,
    type: ITypeSelectType
  ) => void;
}
