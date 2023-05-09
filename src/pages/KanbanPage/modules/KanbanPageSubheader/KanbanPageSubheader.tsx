import React from 'react';
import styles from './KanbanPageSubheader.module.css';
import { Button } from '../../../../ui/Button/Button';
import { PlusIcon } from '../../../../assets/icons/UtilsIcons';

interface TableViewControllerProps {}

export const KanbanPageSubheader: React.FC<
  TableViewControllerProps
> = (): JSX.Element => {
  return (
    <div className={styles.subheader}>
      <div className={styles.filters__cont}>
        <h2 className={styles.filterTitle}>Filter by:</h2>
        <div className={styles.filter}>
          <span className={styles.filter__name}>Assignee:</span>
          <span className={styles.filter__value}>Denis Bitaev</span>
        </div>
        <div className={styles.filter}>
          <span className={styles.filter__name}>Status:</span>
          <span className={styles.filter__value}>In progress</span>
        </div>

        <Button theme={'default'} className={styles.addBtn}>
          <PlusIcon />
        </Button>
      </div>

      <div>
        <Button theme={'default'} className={styles.clearBtn}>
          Clear filters
        </Button>
      </div>
    </div>
  );
};
