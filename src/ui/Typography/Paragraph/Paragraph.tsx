import React, { DetailedHTMLProps } from 'react';
import styles from './Paragraph.module.css';
import classNames from 'classnames';

interface ParagraphProps
  extends DetailedHTMLProps<
    React.AllHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <p {...props} className={classNames(styles.paragraph, props.className)}>
      {children}
    </p>
  );
};
