import React, { DetailedHTMLProps } from 'react';
import styles from './Text.module.css';
import classNames from 'classnames';

interface TextProps
  extends DetailedHTMLProps<
    React.AllHTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <span {...props} className={classNames(styles.text, props.className)}>
      {children}
    </span>
  );
};
