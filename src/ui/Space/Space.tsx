import React from 'react';
import styles from './Space.module.css';
import classNames from 'classnames';

export type SizeProp = '2xs' | 'xs' | 's' | 'sm' | 'm' | 'l' | 'xl';

interface SpaceProps {
  mx?: SizeProp;
  my?: SizeProp;
}

export const Space: React.FC<SpaceProps> = ({
  mx = 's',
  my = 's',
}): JSX.Element => {
  return (
    <div
      className={classNames(styles.space, {
        // mx
        [styles.mx_2xs]: mx === '2xs',
        [styles.mx_xs]: mx === 'xs',
        [styles.mx_s]: mx === 's',
        [styles.mx_sm]: mx === 'sm',
        [styles.mx_m]: mx === 'm',
        [styles.mx_l]: mx === 'l',
        [styles.mx_xl]: mx === 'xl',
        // my
        [styles.my_my_xs2]: my === '2xs',
        [styles.my_xs]: my === 'xs',
        [styles.my_s]: my === 's',
        [styles.my_sm]: my === 'sm',
        [styles.my_m]: my === 'm',
        [styles.my_l]: my === 'l',
        [styles.my_xl]: my === 'xl',
      })}
    />
  );
};
