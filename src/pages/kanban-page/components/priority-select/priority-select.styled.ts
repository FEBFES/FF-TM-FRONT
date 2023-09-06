import styled, { css } from 'styled-components';

export const SPrioritySelect = styled.div`
  min-width: 20px;
  margin-left: 5px;
  cursor: pointer;
`;

export const SPriorityContainer = styled.div<{ direction: 'bottom' | 'top' }>`
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

export const SPriorityElement = styled.div`
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
