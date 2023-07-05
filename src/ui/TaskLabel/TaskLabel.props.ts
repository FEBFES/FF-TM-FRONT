export type ITaskLabelType =
  | 'NONE'
  | 'QUESTION'
  | 'RESEARCH'
  | 'BUG'
  | 'FEATURE';

export interface TaskLabelProps {
  type: ITaskLabelType | null | string;
}
