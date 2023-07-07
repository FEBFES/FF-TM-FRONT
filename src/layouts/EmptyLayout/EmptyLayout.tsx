import React from 'react';
import styles from './EmptyLayout.module.css';
import EmptyLayoutProps from './EmptyLayout.props';
import { useTitle } from '../../hooks/useTitle';

export const EmptyLayout: React.FC<EmptyLayoutProps> = ({
  children,
  pageTitle,
}): JSX.Element => {
  useTitle(pageTitle);

  return <div className={styles.emptyLayout}>{children}</div>;
};
