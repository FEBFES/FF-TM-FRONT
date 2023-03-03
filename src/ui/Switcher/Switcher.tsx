import React from 'react';
import styles from './Switcher.module.css';
import classNames from 'classnames';

interface SwitcherProps {
  onClick: () => void;
  isActive: boolean;
  className?: string;
}

export const Switcher: React.FC<SwitcherProps> = ({
  onClick,
  isActive,
  className,
}): JSX.Element => {
  return (
    <div onClick={onClick} className={styles.checkbox_input}>
      <div
        className={classNames(className, styles.checkbox_circle, {
          [styles.checkbox_circleActive]: isActive,
        })}
      />
    </div>
  );
};
