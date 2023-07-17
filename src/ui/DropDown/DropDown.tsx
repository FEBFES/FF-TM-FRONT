import React from 'react';
import styles from './DropDown.module.css';
import { useClickOutside } from '../../hooks/useClickOutside';

interface DropDownProps {
  children: React.ReactNode;
  setShow: (bool: boolean) => void;
  show: boolean;
}

export const DropDown: React.FC<DropDownProps> = ({
  children,
  setShow,
  show,
}) => {
  const { ref } = useClickOutside(setShow);

  if (!children || !show) {
    return null;
  }

  return (
    <div
      id={'DropDown'}
      onClick={(e) => {
        e.stopPropagation();
      }}
      ref={ref}
      className={styles.ddContainer}
    >
      {children}
    </div>
  );
};
