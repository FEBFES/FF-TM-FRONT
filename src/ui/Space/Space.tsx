import React from 'react';
import styles from './Space.module.css';
import classNames from 'classnames';

export type SizeProp = 'xs' | 's' | 'sm' | 'm' | 'l' | 'xl';

interface SpaceProps {
  mx: SizeProp;
}

export const Space: React.FC<SpaceProps> = ({ mx }): JSX.Element => {
  return (
    <div
      className={classNames({
        [styles.xs]: mx === 'xs',
        [styles.s]: mx === 's',
        [styles.sm]: mx === 'sm',
        [styles.m]: mx === 'm',
        [styles.l]: mx === 'l',
        [styles.xl]: mx === 'xl',
      })}
    />
  );
};
