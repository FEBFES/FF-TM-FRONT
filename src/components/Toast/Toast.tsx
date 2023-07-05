import React, { useEffect, useState } from 'react';
import styles from './Toast.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faTriangleExclamation,
  faCircleExclamation,
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
      {toasts.map((toast: IToast) => {
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
      className={classNames(styles.toast, {
        [styles.toastError]: type === 'error',
        [styles.toastPrimary]: type === 'primary',
        [styles.toastSuccess]: type === 'success',
        [styles.toastWarning]: type === 'warning',
        [styles.toast__del]: del,
      })}
    >
      <div className={classNames(styles.toast__icon)}>
        {type === 'warning' && (
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            color="#fde58f"
            size={'sm'}
          />
        )}
        {type === 'error' && (
          <FontAwesomeIcon
            icon={faCircleExclamation}
            color="#fcccc7"
            size={'sm'}
          />
        )}
        {type === 'success' && (
          <FontAwesomeIcon icon={faCircleCheck} color="#b7eb8f" size={'sm'} />
        )}
        {type === 'primary' && (
          <FontAwesomeIcon icon={faCircleCheck} color="#91caff" size={'sm'} />
        )}
      </div>
      <span className={styles.toast_text}>{message}</span>
    </div>
  ) : (
    <></>
  );
};
