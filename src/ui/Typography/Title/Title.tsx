import React, { DetailedHTMLProps } from 'react';
import styles from './Title.module.css';
import classNames from 'classnames';

interface TitleProps
  extends DetailedHTMLProps<
    React.AllHTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <h1 {...props} className={classNames(styles.title, props.className)}>
      {children}
    </h1>
  );
};
