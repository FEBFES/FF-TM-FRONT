import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Loader } from '../loader/loader';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { SButtonCloseType, SBasicButton } from './button.styled';

export type IButtonVariant = 'submit' | 'danger' | 'primary' | 'secondary';
// todo export type IButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link' | 'close';
export type IButtonType = 'primary' | 'close';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  load?: boolean;
  variant?: IButtonVariant;
  btnType?: IButtonType;
}

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
      <SButtonCloseType
        {...props}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          onClick ? onClick(e) : {}
        }
      >
        <FontAwesomeIcon icon={faXmark} size={'sm'} />
      </SButtonCloseType>
    );
  }

  return (
    <SBasicButton
      variant={variant}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick && !load) {
          onClick(e);
        }
      }}
      {...props}
    >
      {children}
      {load && <Loader />}
    </SBasicButton>
  );
};
