import React from 'react';
import styles from './KanbanViewSwitcher.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { setCurView } from '../../store/kanban.slice';

interface KanbanViewSwitcherProps {}

export const KanbanViewSwitcher: React.FC<
  KanbanViewSwitcherProps
> = (): JSX.Element => {
  const curView = useTypedSelector((state) => state.curProj.curView);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.switcher}>
      <FontAwesomeIcon
        className={`${styles.switcher__item} ${
          curView === 'col' && styles.switcher__item_active
        }`}
        onClick={() => dispatch(setCurView('col'))}
        icon={faTableColumns}
      />
      <FontAwesomeIcon
        className={`${styles.switcher__item} ${
          curView === 'row' && styles.switcher__item_active
        }`}
        onClick={() => dispatch(setCurView('row'))}
        icon={faBars}
      />
    </div>
  );
};
