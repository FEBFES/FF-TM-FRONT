import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ButtonProps } from './Button.props';
import { Loader } from '../Loader/Loader';

export const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = 'primary',
  btnType = 'primary',
  children,
  className,
  load = false,
  ...props
}): JSX.Element => {
  if (btnType === 'close') {
    return (
      <button
        {...props}
        className={styles.buttonClose}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          onClick ? onClick(e) : {}
        }
      >
        <FontAwesomeIcon icon={faXmark} size={'sm'} />
      </button>
    );
  }

  return (
    <button
      className={classNames(`${styles.btn} ${className}`, {
        // [styles.btnDefault]: btnType === 'default',
        // [styles.btnPrimary]: btnType === 'primary',
        // [styles.btnDashed]: btnType === 'dashed',
        // [styles.btnText]: btnType === 'text',
        // [styles.btnLink]: btnType === 'link',
        [styles.buttonSubmit]: variant === 'submit',
        [styles.buttonDanger]: variant === 'danger',
        [styles.buttonPrimary]: variant === 'primary',
        [styles.buttonSecondary]: variant === 'secondary',
      })}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick && !load) {
          onClick(e);
        }
      }}
      {...props}
    >
      {children}
      {load && <Loader />}
    </button>
  );
};
