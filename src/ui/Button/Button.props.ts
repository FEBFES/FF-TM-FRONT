import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  load?: boolean;
  theme: 'default' | 'submit' | 'outline' | 'close' | 'danger' | 'primary';
}
