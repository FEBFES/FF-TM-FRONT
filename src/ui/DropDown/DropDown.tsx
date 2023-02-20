import React, { ReactElement } from 'react';
import styles from './DropDown.module.css';

interface DropDownProps {
  children: React.ReactNode;
  isOpenDropDown: boolean;
}

export const DropDown: React.FC<DropDownProps> = ({
  children,
  isOpenDropDown,
}): ReactElement => {
  return (
    <div className={isOpenDropDown ? styles.dropdown : styles.dropdownClose}>
      {isOpenDropDown ? children : null}
    </div>
  );
};
