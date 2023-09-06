import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SSwitcher = styled.div`
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--bg-border);
  border-radius: 6px;
`;

export const SSwitcherItem = styled(FontAwesomeIcon)<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive &&
    css`
      border-radius: 6px;
      background: var(--bg-primary);
    `}
  padding: 4px 6px;
  cursor: pointer;
  transition: 0.1s;
  font-size: 12px;
  font-weight: 500;
  color: ${({ isActive }) => (isActive ? 'white' : 'var(--font-gray)')};

  &:first-of-type {
    margin-right: 2px;
  }
`;
