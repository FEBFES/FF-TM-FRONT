import React from 'react';
import styles from './Modal.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';

interface IModalProps {
  show: boolean;
  setShow: (boolValue: boolean) => void;
  children: React.ReactNode;
  title?: string;
  onSubmit: () => void;
}

export const Modal: React.FC<IModalProps> = ({
  show,
  setShow,
  children,
  title,
  onSubmit,
}): JSX.Element => {
  return (
    <div
      onClick={() => setShow(false)}
      className={cn(`${styles.wrap}`, {
        [styles.show]: !show,
      })}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.cont}>
        <div className={styles.up}>
          <div className={styles.cont__header}>
            <h1 className={styles.cont__headerTitle}>{title}</h1>
            <Button theme={'close'} onClick={() => setShow(false)}>
              x
            </Button>
          </div>

          <div>{show && children}</div>
        </div>

        <div className={styles.modal__footer}>
          <Button theme={'outline'} onClick={() => setShow(false)}>
            cancel
          </Button>
          <Button
            theme={'submit'}
            onClick={() => {
              onSubmit();
              setShow(false);
            }}
          >
            submit
          </Button>
        </div>
      </div>
    </div>
  );
};
