import { IPriorityType } from './PrioritySelect.type';

export interface PrioritySelectProps {
  curPriority: IPriorityType;
  setCurPriority: (type: IPriorityType) => void;
  direction: 'bottom' | 'top';
}
