import styled from 'styled-components';
import { SizeProp, DirectionType } from './space';

export type StyledVariants<E extends string> = {
  [key in E]?: string;
};

const sizes: StyledVariants<SizeProp> = {
  '2xs': '3px',
  xs: '6px',
  s: '8px',
  sm: '12px',
  m: '16px',
  l: '24px',
  xl: '32px',
};

export const SAvatar = styled.div<{
  size: SizeProp;
  direction: DirectionType;
}>`
  margin-left: ${({ direction, size }) =>
    direction === 'row' ? sizes[size] : '0'};
  margin-right: ${({ direction, size }) =>
    direction === 'row' ? sizes[size] : '0'};

  margin-top: ${({ direction, size }) =>
    direction === 'col' ? sizes[size] : '0'};
  margin-bottom: ${({ direction, size }) =>
    direction === 'col' ? sizes[size] : '0'};

  display: ${({ direction }) =>
    direction === 'row' ? 'inline-block' : 'block'};
`;
