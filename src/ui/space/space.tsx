import React from 'react';
import { SAvatar } from './space.styled';

export type SizeProp = '2xs' | 'xs' | 's' | 'sm' | 'm' | 'l' | 'xl';
export type DirectionType = 'col' | 'row';

interface SpaceProps {
  size?: SizeProp;
  direction?: DirectionType;
}

export const Space: React.FC<SpaceProps> = ({
  size = 's',
  direction = 'col',
}): JSX.Element => {
  return <SAvatar size={size} direction={direction} />;
};
