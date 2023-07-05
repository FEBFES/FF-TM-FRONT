import { IPriorityType } from '../PrioritySelect/PrioritySelect.type';

export interface IOwnerType {
  displayName: string;
  email: string;
  firstName: string | null;
  id: number;
  lastName: string | null;
  userPic: string | null;
  username: string | null;
}

export interface ITask {
  id: number;
  columnId: number;
  description: string;
  name: string;
  owner: IOwnerType;
  projectId: number;
  filesCounter: number;
  createDate: string;
  priority: IPriorityType;
  type: string | null;
}

export interface IFile {
  createDate: string;
  fileUrn: string;
  id: number;
  name: string;
  type: string | null;
  userId: number;
}
