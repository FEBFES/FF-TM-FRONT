import React, { ReactElement } from 'react';
import styles from './DropDown.module.css';
import { Button } from '../Button/Button';

interface DropDownProps {
  children: string[];
  isOpenDropDown: boolean;
}

export const DropDown: React.FC<DropDownProps> = ({
  children,
  isOpenDropDown,
}): ReactElement => {
  return (
    <div className={isOpenDropDown ? styles.dropdown : styles.dropdownClose}>
      {isOpenDropDown
        ? children.map((buttonsName) => {
          return (
            <Button
              type={'default'}
              children={buttonsName}
              className={styles.dropdown__button}
            />
          );
        })
        : null}
    </div>
  );
};
