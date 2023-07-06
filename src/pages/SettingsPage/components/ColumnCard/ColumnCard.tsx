import React from 'react';
import { ColumnCardProps } from './ColumnCard.props';
import styles from './ColumnCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

export const ColumnCard: React.FC<ColumnCardProps> = ({
  column,
  onDelete,
}): JSX.Element => {
  return (
    <div draggable className={styles.column}>
      <div className={styles.column__left}>
        <p className={styles.subtitle}>#{column.id}</p>
        <h2 className={styles.title}>
          {column.name} - {column.tasks.length}
        </h2>
      </div>

      <div
        className={styles.trashBtn}
        onClick={() => onDelete(column.projectId, column.id)}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  );
};
