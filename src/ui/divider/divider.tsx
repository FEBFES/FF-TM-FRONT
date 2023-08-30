import React from 'react';
import { SDivider } from './divider.styled';

export type directionType = 'row' | 'col';

interface DividerProps {
  direction: directionType;
}

export const Divider: React.FC<DividerProps> = ({
  direction = 'row',
}): JSX.Element => {
  return <SDivider direction={direction} />;
};
