import React, { DetailedHTMLProps } from 'react';
import styles from './Link.module.css';
import classNames from 'classnames';

interface LinkProps
  extends DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <a {...props} className={classNames(styles.link, props.className)}>
      {children}
    </a>
  );
};
