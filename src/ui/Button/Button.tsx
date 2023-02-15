import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
  onClick?: (e: any) => void;
  children?: any;
  className?: string;
  type: 'default' | 'submit' | 'outline' | 'close' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  children,
  className,
}): JSX.Element => {
  if (type === 'close') {
    return (
      <button
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
      className={classNames(`${className}`, {
        [styles.buttonSubmit]: type === 'submit',
        [styles.buttonOutline]: type === 'outline',
        [styles.buttonDanger]: type === 'danger',
        [styles.buttonDefault]: type === 'default',
      })}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
        onClick ? onClick(e) : {}
      }
    >
      {children}
    </button>
  );
};
