import React from 'react';
import styles from './Modal.module.css';
import cn from 'classnames';

export interface IModalProps {
  show: boolean;
  setShow: (boolValue: boolean) => void;
  children: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = ({
  show,
  setShow,
  children,
}): JSX.Element => {
  return (
    <div
      onClick={() => setShow(false)}
      className={cn(`${styles.wrap}`, {
        [styles.show]: !show,
      })}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.cont}>
        {children}
      </div>
    </div>
  );
};
