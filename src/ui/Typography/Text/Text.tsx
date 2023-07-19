import React, { DetailedHTMLProps } from 'react';
import styles from './Text.module.css';
import classNames from 'classnames';

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
  return (
    <p {...props} className={classNames(styles.text)}>
      {children}
    </p>
  );
};
