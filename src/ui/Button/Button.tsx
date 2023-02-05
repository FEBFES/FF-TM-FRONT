import React from 'react';
import './Button.scss';
import classNames from 'classnames';

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
