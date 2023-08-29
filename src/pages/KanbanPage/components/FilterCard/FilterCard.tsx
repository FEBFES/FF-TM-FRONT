import React from 'react';
import styles from './FilterCard.module.css';

export interface FilterCardProps {
  component: JSX.Element;
  title: string;
}

export const FilterCard: React.FC<FilterCardProps> = ({
  component,
  title,
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <span className={styles.filter__name}>{title}:</span>
      </div>
      <div className={styles.componentCont}>{component}</div>
    </div>
  );
};
