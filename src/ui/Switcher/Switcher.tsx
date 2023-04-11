import React from 'react';
import styles from './Switcher.module.css';
import classNames from 'classnames';
import { SwitcherProps } from './Switcher.props';

export const Switcher: React.FC<SwitcherProps> = ({
  onClick,
  isActive,
  className,
  ...props
}): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className={styles.checkbox_input}
      aria-checked={isActive}
      role={'checkbox'}
      aria-disabled={false}
      {...props}
    >
      <div
        className={classNames(className, styles.checkbox_circle, {
          [styles.checkbox_circleActive]: isActive,
        })}
      />
    </div>
  );
};
