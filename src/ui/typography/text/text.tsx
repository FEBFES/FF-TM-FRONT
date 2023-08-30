import React, { DetailedHTMLProps } from 'react';
import { SText } from './text.styled';

interface TextProps
  extends DetailedHTMLProps<
    React.AllHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <SText {...props}>{children}</SText>;
};
