import React, { DetailedHTMLProps } from 'react';
import { STitle } from './title.styled';

export type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps
  extends DetailedHTMLProps<
    React.AllHTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  level?: TitleLevel;
  children: React.ReactNode;
  cursor?: 'pointer';
  hover?: 'underline';
}

export const Title: React.FC<TitleProps> = ({
  children,
  level = 'h3',
  cursor,
  hover,
  ...props
}): JSX.Element => {
  return (
    <STitle {...props} size={level} cursor={cursor} hover={hover}>
      {children}
    </STitle>
  );
};
