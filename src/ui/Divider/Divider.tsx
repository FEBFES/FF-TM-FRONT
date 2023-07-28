import React from 'react';
import styles from './Divider.module.css';
import classNames from 'classnames';

interface DividerProps {
  direction?: 'row' | 'col';
}

export const Divider: React.FC<DividerProps> = ({
  direction = 'row',
}): JSX.Element => {
  return (
    <div
      className={classNames(styles.divider, {
        [styles.divider_row]: direction === 'row',
        [styles.divider_col]: direction === 'col',
      })}
    />
  );
};
