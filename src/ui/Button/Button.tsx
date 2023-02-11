import React from 'react';
import './Button.scss';
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
        className={'button-close'}
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
      className={classNames(`${className} button-${type}`, {})}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
        onClick ? onClick(e) : {}
      }
    >
      {children}
    </button>
  );
};
