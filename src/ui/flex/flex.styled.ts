import styled from 'styled-components';
import { DirectionType, JustyfyContentType, AlignItemsType } from './flex';

interface SFlexContainerProps {
  dir: DirectionType;
  jc: JustyfyContentType;
  ai: AlignItemsType;
}

export const SFlexContainer = styled.div<SFlexContainerProps>`
  display: flex;
  flex-direction: ${({ dir }) => dir};
  align-items: ${({ ai }) => ai};
  justify-content: ${({ jc }) => jc};
`;
