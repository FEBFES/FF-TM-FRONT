import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ButtonProps } from './Button.props';

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
      className={classNames(`${className}`, {
        [styles.buttonSubmit]: theme === 'submit',
        [styles.buttonOutline]: theme === 'outline',
        [styles.buttonDanger]: theme === 'danger',
        [styles.buttonDefault]: theme === 'default',
      })}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
        onClick ? onClick(e) : {}
      }
      {...props}
    >
      {children}
    </button>
  );
};
