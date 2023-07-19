import React, { DetailedHTMLProps } from 'react';
import styles from './Title.module.css';
import classNames from 'classnames';

type TitleLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

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
    <h1
      {...props}
      className={classNames(styles.titleCommon, props.className, {
        [styles.title]: level === 'h1',
        [styles.title_h2]: level === 'h2',
        [styles.title_h3]: level === 'h3',
        [styles.title_h4]: level === 'h4',
        [styles.title_h5]: level === 'h5',
        [styles.title_h6]: level === 'h6',
        // Cursor
        [styles.cursor_pointer]: cursor === 'pointer',
        // Hover
        [styles.hover_underline]: hover === 'underline',
      })}
    >
      {children}
    </h1>
  );
};
