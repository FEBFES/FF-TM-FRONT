import React from 'react';
import { FilterCardProps } from './FilterCard.props';
import styles from './FilterCard.module.css';

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
