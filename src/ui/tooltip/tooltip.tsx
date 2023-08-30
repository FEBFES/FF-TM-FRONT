import React, { HTMLAttributes, useState } from 'react';
import { SRelativeContainer, STooltip } from './tooltip.styled';

export type PlacementType = 'left' | 'top' | 'right' | 'bottom';

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: any;
  placement?: PlacementType;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  placement = 'top',
  ...props
}): JSX.Element => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const hoverHandler = (bool: boolean) => {
    setIsHover(bool);
  };

  return (
    <SRelativeContainer
      onMouseEnter={() => {
        hoverHandler(true);
      }}
      onMouseLeave={() => {
        hoverHandler(false);
      }}
      {...props}
    >
      {isHover && title && <STooltip placement={placement}>{title}</STooltip>}
      <SRelativeContainer>{children}</SRelativeContainer>
    </SRelativeContainer>
  );
};
