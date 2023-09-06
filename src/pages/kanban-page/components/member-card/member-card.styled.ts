import styled from 'styled-components';

export const SAssigneeCard = styled.div<{ bordered?: boolean }>`
  border: ${({ bordered }) =>
    bordered ? '1px solid var(--bg-border)' : 'none'}
  margin-top: 2px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  color: var(--font-gray);

  &:hover {
    cursor: pointer;
    background: var(--bg-100);
  }
  & > p {
    margin-left: 5px;
  }
  & > span {
    margin-left: 10px;
  }
`;
