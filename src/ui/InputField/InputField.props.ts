import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface IInputFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: any;
}
