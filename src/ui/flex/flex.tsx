import React from 'react';
import { SFlexContainer } from './flex.styled';

export type DirectionType = 'col' | 'row';
export type JustyfyContentType =
  | 'between'
  | 'around'
  | 'center'
  | 'start'
  | 'end';
export type AlignItemsType = 'between' | 'around' | 'center' | 'start' | 'end';

interface FlexProps {
  children: React.ReactNode;
  dir?: DirectionType;
  jc?: JustyfyContentType;
  ai?: AlignItemsType;
}

export const Flex: React.FC<FlexProps> = ({
  children,
  dir = 'row',
  jc = 'between',
  ai = 'center',
}): JSX.Element => {
  return (
    <SFlexContainer dir={dir} jc={jc} ai={ai}>
      {children}
    </SFlexContainer>
  );
};
