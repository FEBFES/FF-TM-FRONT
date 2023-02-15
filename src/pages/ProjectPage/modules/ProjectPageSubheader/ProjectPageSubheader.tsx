import React from 'react';
import styles from './ProjectPageSubheader.module.css';
import { ArrowIcon } from '../../../../assets/icons/UtilsIcons';

interface TableViewControllerProps {}

export const ProjectPageSubheader: React.FC<
  TableViewControllerProps
> = (): JSX.Element => {
  return (
    <div className={styles.subheader}>
      <div className={styles.sort}>
        <span className={styles.sort__type}>TimeLine:</span>
        <p className={styles.sort__value}>May 9, 2022 - June 9, 2022</p>
        <ArrowIcon />
      </div>

      <div className={styles.sort}>
        <span className={styles.sort__type}>Status:</span>
        <p className={styles.sort__value}>Done</p>
        <ArrowIcon />
      </div>

      <div className={styles.sort}>
        <span className={styles.sort__type}>Priority:</span>
        <p className={styles.sort__value}>High</p>
        <ArrowIcon />
      </div>

      <div className={styles.sort}>
        <span className={styles.sort__type}>Type:</span>
        <p className={styles.sort__value}>Feature</p>
        <ArrowIcon />
      </div>

      <div className={styles.sort}>
        <span className={styles.sort__type}>Assigned:</span>
        <p className={styles.sort__value}>Denis Bitaev</p>
        <ArrowIcon />
      </div>
    </div>
  );
};
