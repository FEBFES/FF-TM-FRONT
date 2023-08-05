import React from 'react';
import styles from './Flex.module.css';
import classNames from 'classnames';

interface FlexProps {
  children: React.ReactNode;
  dir?: 'col' | 'row';
  jc?: 'between' | 'around' | 'center' | 'start' | 'end';
  ai?: 'between' | 'around' | 'center' | 'start' | 'end';
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
        //align-items
        [styles.col]: dir === 'col',
        [styles.row]: dir === 'row',
        [styles.aiBetween]: ai === 'between',
        [styles.aiAround]: ai === 'around',
        [styles.aiCenter]: ai === 'center',
        [styles.aiStart]: ai === 'start',
        [styles.aiEnd]: ai === 'end',
        // justify-content
        [styles.jcBetween]: jc === 'between',
        [styles.jcAround]: jc === 'around',
        [styles.jcCenter]: jc === 'center',
        [styles.jcStart]: jc === 'start',
        [styles.jcEnd]: jc === 'end',
      })}
    >
      {children}
    </div>
  );
};
