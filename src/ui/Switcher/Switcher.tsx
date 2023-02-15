import React from 'react';
import styles from './Switcher.module.css';
import classNames from 'classnames';

interface SwitcherProps {
  onClick: () => void;
  isActive: boolean;
}

export const Switcher: React.FC<SwitcherProps> = ({
  onClick,
  isActive,
}): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.cont, {
        [styles.contActive]: isActive,
      })}
    >
      <div className={classNames(styles.switcher)} />
    </div>
  );
};
