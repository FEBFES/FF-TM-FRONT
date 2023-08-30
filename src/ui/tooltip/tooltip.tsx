import React, { HTMLAttributes, useState } from 'react';
import styles from './Tooltip.module.css';
import classNames from 'classnames';

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
    <div
      className={styles.container}
      onMouseEnter={() => {
        hoverHandler(true);
      }}
      onMouseLeave={() => {
        hoverHandler(false);
      }}
      {...props}
    >
      {isHover && title && (
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
      <div className={styles.content}>{children}</div>
    </div>
  );
};
