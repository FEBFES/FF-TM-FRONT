import styled, { css, RuleSet } from 'styled-components';
import { ITypeSelectType } from './type-select';

export const STypeSelect = styled.div`
  min-width: 20px;
  margin-left: 5px;
  cursor: pointer;
`;

export const STypeContainer = styled.div<{ direction: 'bottom' | 'top' }>`
  ${({ direction }) =>
    direction === 'bottom' &&
    css`
      bottom: 0;
    `}
  ${({ direction }) =>
    direction === 'top' &&
    css`
      top: 0;
    `}
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: 1px solid var(--bg-border);
  background: var(--bg-100);
  box-shadow: 0 8px 24px var(--bg-shadow);
  border-radius: 6px;
  justify-content: space-between;
`;

export type StyledVariants<E extends string> = {
  [key in E]?: RuleSet;
};

const taskTypes: StyledVariants<ITypeSelectType> = {
  'FEATURE': css`
    border: 1px solid #296529;
    color: #18e022 !important;
  `,
  'QUESTION': css`
    border: 1px solid #7a2b85;
    color: #d97ee5 !important;
  `,
  'BUG': css`
    border: 1px solid #cc4a4d;
    color: #fd9b9d !important;
  `,
  'RESEARCH': css`
    border: 1px solid #88721f;
    color: #fac905 !important;
  `,
};

export const STaskType = styled.div<{ type: ITypeSelectType }>`
  ${({ type }) => taskTypes[type]}
  margin-left: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 100px;
  border: 1px solid var(--bg-border);
  color: var(--font-gray);
  font-size: 14px;
  font-weight: 700;
`;

export const STypeElement = styled.div`
  color: var(--font-defautl);
  font-size: 10px;
  font-weight: 600;
  border: none;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;

  &:hover {
    background: var(--bg-border);
    cursor: pointer;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;
