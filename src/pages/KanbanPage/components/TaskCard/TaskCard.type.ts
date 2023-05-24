import { IPriorityType } from '../PrioritySelect/PrioritySelect.type';

export interface ITask {
  id: number;
  columnId: number;
  description: string;
  name: string;
  ownerId: number;
  projectId: number;
  createDate: string;
  priority: IPriorityType;
  ownerUserPic: string | null;
  type: string | null;
}
