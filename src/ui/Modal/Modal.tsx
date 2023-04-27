import React from 'react';
import styles from './Modal.module.css';
import cn from 'classnames';
import { IModalProps } from './Modal.props';

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
        {/*{empty && (*/}
        {/*  <div className={styles.cont__header}>*/}
        {/*    <h1 className={styles.cont__headerTitle}>{title}</h1>*/}
        {/*    <Button theme={'close'} onClick={() => setShow(false)}>*/}
        {/*      x*/}
        {/*    </Button>*/}
        {/*  </div>*/}
        {/*)}*/}

        {children}

        {/*{empty && (*/}
        {/*  <div className={styles.modal__footer}>*/}
        {/*    <Button theme={'outline'} onClick={() => setShow(false)}>*/}
        {/*      cancel*/}
        {/*    </Button>*/}
        {/*    <Button*/}
        {/*      theme={'submit'}*/}
        {/*      onClick={() => {*/}
        {/*        onSubmit();*/}
        {/*        setShow(false);*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      submit*/}
        {/*    </Button>*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    </div>
  );
};
