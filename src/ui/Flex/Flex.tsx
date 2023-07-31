import React from 'react';
import styles from './Flex.module.css';
import classNames from 'classnames';

interface FlexProps {
  children: React.ReactNode;
  dir?: 'col' | 'row';
  jc?: 'between' | 'around' | 'center';
  ai?: 'between' | 'around' | 'center';
}

export const Flex: React.FC<FlexProps> = ({
  children,
  dir = 'row',
  jc = 'between',
  ai = 'center',
}): JSX.Element => {
  return (
    <div
      className={classNames(styles.flexContainer, {
        [styles.col]: dir === 'col',
        [styles.row]: dir === 'row',
        [styles.aiBetween]: ai === 'between',
        [styles.aiAround]: ai === 'around',
        [styles.aiCenter]: ai === 'center',
        [styles.jcBetween]: jc === 'between',
        [styles.jcAround]: jc === 'around',
        [styles.jcCenter]: jc === 'center',
      })}
    >
      {children}
    </div>
  );
};
