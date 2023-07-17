import React from 'react';
import styles from './KanbanViewSwitcher.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTableColumns } from '@fortawesome/free-solid-svg-icons';

interface KanbanViewSwitcherProps {
  curView: 'col' | 'row';
  setCurView: (view: 'col' | 'row') => void;
}

export const KanbanViewSwitcher: React.FC<KanbanViewSwitcherProps> = ({
  curView,
  setCurView,
}): JSX.Element => {
  return (
    <div className={styles.switcher}>
      <FontAwesomeIcon
        className={`${styles.switcher__item} ${
          curView === 'col' && styles.switcher__item_active
        }`}
        onClick={() => setCurView('col')}
        icon={faTableColumns}
      />
      <FontAwesomeIcon
        className={`${styles.switcher__item} ${
          curView === 'row' && styles.switcher__item_active
        }`}
        onClick={() => setCurView('row')}
        icon={faBars}
      />
    </div>
  );
};
