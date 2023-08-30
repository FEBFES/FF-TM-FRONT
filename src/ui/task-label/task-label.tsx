import React from 'react';
import { STaskLabel } from './task-label.styled';

export type ITaskLabelType =
  | 'NONE'
  | 'QUESTION'
  | 'RESEARCH'
  | 'BUG'
  | 'FEATURE';

export interface TaskLabelProps {
  type: ITaskLabelType | null;
}

export const TaskLabel: React.FC<TaskLabelProps> = ({ type }): JSX.Element => {
  return (
    <>
      {type !== 'NONE' && type && (
        <STaskLabel type={type}>{type.toLowerCase()}</STaskLabel>
      )}
    </>
  );
};
