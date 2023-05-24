export type IPriorityType = 'DEFAULT' | 'LOW' | 'MEDIUM' | 'HIGH';

export interface IPriorityTypeItem {
  title: IPriorityType;
  value: JSX.Element;
}
