import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  theme: 'default' | 'submit' | 'outline' | 'close' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  theme,
  children,
  className,
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
      {...props}
      className={classNames(`${className}`, {
        [styles.buttonSubmit]: theme === 'submit',
        [styles.buttonOutline]: theme === 'outline',
        [styles.buttonDanger]: theme === 'danger',
        [styles.buttonDefault]: theme === 'default',
      })}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
        onClick ? onClick(e) : {}
      }
    >
      {children}
    </button>
  );
};
