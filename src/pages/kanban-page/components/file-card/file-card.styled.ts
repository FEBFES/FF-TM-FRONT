import styled from 'styled-components';

export const SFileCard = styled.div`
  white-space: pre;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const SDeleteButton = styled.div`
  background: var(--bg-border);
  padding: 2px 6px;
  border-radius: 4px;

  &:hover {
    background: lightcoral;
  }
`;
