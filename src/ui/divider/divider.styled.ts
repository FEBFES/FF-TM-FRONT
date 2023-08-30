import styled from 'styled-components';
import { directionType } from './divider';

export const SDivider = styled.div<{ direction: directionType }>`
  background: var(--bg-border);
  width: ${({ direction }) => (direction === 'col' ? '2px' : '80%')}
  height: ${({ direction }) => (direction === 'col' ? '80%' : '2px')}
`;
