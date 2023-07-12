import { ButtonHTMLAttributes, ReactNode } from 'react';

export type IButtonVariant = 'submit' | 'danger' | 'primary' | 'secondary';
//todo
// export type IButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link' | 'close';
export type IButtonType = 'primary' | 'close';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  load?: boolean;
  variant?: IButtonVariant;
  btnType?: IButtonType;
}
