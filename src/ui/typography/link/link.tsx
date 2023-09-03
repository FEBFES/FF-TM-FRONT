import React, { DetailedHTMLProps } from 'react';

interface LinkProps
  extends DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <a {...props} className={props.className}>
      {children}
    </a>
  );
};
