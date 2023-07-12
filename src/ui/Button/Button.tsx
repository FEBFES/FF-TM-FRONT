import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ButtonProps } from './Button.props';
import { Loader } from '../Loader/Loader';

export const Button: React.FC<ButtonProps> = ({
  onClick,
  theme,
  children,
  className,
  load = false,
  ...props
}): JSX.Element => {
  if (theme === 'close') {
    return (
      <button
        {...props}
        className={styles.buttonClose}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          onClick ? onClick(e) : {}
        }
      >
        <FontAwesomeIcon icon={faXmark} size={'lg'} />
      </button>
    );
  }
  return (
    <button
      className={classNames(`${styles.btnDefault} ${className}`, {
        [styles.buttonSubmit]: theme === 'submit',
        [styles.buttonOutline]: theme === 'outline',
        [styles.buttonDanger]: theme === 'danger',
        [styles.buttonDefault]: theme === 'default',
        [styles.buttonPrimary]: theme === 'primary',
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
