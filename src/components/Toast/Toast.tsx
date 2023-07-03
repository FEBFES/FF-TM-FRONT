import React, { useEffect, useState } from 'react';
import styles from './Toast.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faTriangleExclamation,
  faCircleExclamation,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { v4 } from 'uuid';
import { delToast } from '../../store/App/AppSlice';
import classNames from 'classnames';
import { IToast } from './Toast.props';

export const ToastCont = () => {
  const toasts = useTypedSelector((state) => state.app.toasts);

  return toasts.length ? (
    <div className={styles.toast__container}>
      {toasts.map((toast) => {
        return (
          <Toast
            id={toast.id}
            delay={toast.delay || 3000}
            key={v4()}
            message={toast.message}
            type={toast.type}
          />
        );
      })}
    </div>
  ) : null;
};

export const Toast: React.FC<IToast> = ({
  type,
  message,
  delay,
  id,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(true);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, delay);

    const timer2 = setTimeout(() => {
      setDel(true);
    }, delay - 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [delay]);

  useEffect(() => {
    if (!visible && id) {
      setTimeout(() => {
        dispatch(delToast(id));
      }, 1000);
    }
  }, [visible, dispatch, id]);

  return visible ? (
    <div
      className={classNames(styles.toast , {
        [styles.toastError]: type === 'error',
        [styles.toastDefault]: type === 'default',
        [styles.toastSuccess]: type === 'success',
        [styles.toastWarning]: type === 'warning',
        [styles.toast__del]: del
      })}
    >
      <div className={classNames(styles.toast__icon)}>
        {type === 'warning' && (
          <FontAwesomeIcon icon={faTriangleExclamation} size={'lg'} />
        )}
        {type === 'error' && (
          <FontAwesomeIcon icon={faCircleExclamation} size={'lg'} />
        )}
        {type === 'success' && (
          <FontAwesomeIcon icon={faCircleCheck} size={'lg'} />
        )}
        {type === 'default' && (
          <FontAwesomeIcon icon={faExclamation} size={'lg'} />
        )}
      </div>
      <span className={styles.toast_text}>{message}</span>
    </div>
  ) : (
    <></>
  );
};
