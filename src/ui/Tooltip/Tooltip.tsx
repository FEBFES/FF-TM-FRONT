import React, { useState } from 'react';
import styles from './Tooltip.module.css';
import classNames from 'classnames';

export type PlacementType = 'left' | 'top' | 'right' | 'bottom';

interface TooltipProps {
  title: string;
  children: any;
  placement?: PlacementType;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  title,
  placement = 'top',
}): JSX.Element => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const hoverHandler = (bool: boolean) => {
    setIsHover(bool);
  };

  return (
    <div
      className={`${
        children?.props?.className ? children?.props?.className : ''
      }`}
      onMouseEnter={() => {
        hoverHandler(true);
      }}
      onMouseLeave={() => {
        hoverHandler(false);
      }}
    >
      {isHover && (
        <div
          className={classNames(styles.tooltip, {
            [styles.tooltipLeft]: placement === 'left',
            [styles.tooltipRight]: placement === 'right',
            [styles.tooltipTop]: placement === 'top',
            [styles.tooltipBottom]: placement === 'bottom',
          })}
        >
          {title}
        </div>
      )}
      {children}
    </div>
  );
};
