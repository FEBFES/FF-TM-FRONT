import styled, { RuleSet, css } from 'styled-components';
import { ITaskLabelType } from './task-label';

export type StyledVariants<E extends string> = {
  [key in E]?: RuleSet;
};

const taskTypes: StyledVariants<ITaskLabelType> = {
  QUESTION: css`
    background: var(--task-label-q-bg);
    border: 1px solid var(--task-label-q-border);
    color: var(--task-label-q-color);
  `,
  RESEARCH: css`
    background: var(--task-label-r-bg);
    border: 1px solid var(--task-label-r-border);
    color: var(--task-label-r-color);
  `,
  BUG: css`
    background: var(--task-label-b-bg);
    border: 1px solid var(--task-label-b-border);
    color: var(--task-label-b-color);
  `,
  FEATURE: css`
    background: var(--task-label-f-bg);
    border: 1px solid var(--task-label-f-border);
    color: var(--task-label-f-color);
  `,
};

export const STaskLabel = styled.div<{ type: ITaskLabelType }>`
  ${({ type }) => taskTypes[type]};
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 10px;
  line-height: 14px;
  font-weight: 400;
`;
