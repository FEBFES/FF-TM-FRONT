import React, { useState } from 'react';
import styles from './KanbanPageSubheader.module.css';
import { FilterCard } from '../../components/FilterCard/FilterCard';
import { PrioritySelect } from '../../components/PrioritySelect/PrioritySelect';
import { TypeSelect } from '../../components/TypeSelect/TypeSelect';
import { IPriorityType } from '../../components/PrioritySelect/PrioritySelect.type';
import { ITaskLabelType } from '../../../../ui/TaskLabel/TaskLabel.props';
import i18n from 'i18next';

interface TableViewControllerProps {
  curView: 'row' | 'col';
  setCurView: (str: 'row' | 'col') => void;
}

export const KanbanPageSubheader: React.FC<TableViewControllerProps> = ({
  curView,
  setCurView,
}): JSX.Element => {
  const [curType, setCurType] = useState<ITaskLabelType>('NONE');
  const [curPriority, setCurPriority] = useState<IPriorityType>('DEFAULT');

  return (
    <div className={styles.subheader}>
      <div className={styles.switcher}>
        {/*todo i18next*/}
        <span
          className={`${styles.switcher__item} ${
            curView === 'col' && styles.switcher__item_active
          }`}
          onClick={() => setCurView('col')}
        >
          kanban
        </span>
        {/*todo i18next*/}

        <span
          className={`${styles.switcher__item} ${
            curView === 'row' && styles.switcher__item_active
          }`}
          onClick={() => setCurView('row')}
        >
          list
        </span>
      </div>
      <div className={styles.filters__cont}>
        <FilterCard
          title={i18n.t('utils.any.priority')}
          component={
            <PrioritySelect
              direction={'bottom'}
              curPriority={curPriority}
              setCurPriority={setCurPriority}
            />
          }
        />
        <FilterCard
          title={i18n.t('utils.any.type')}
          component={
            <TypeSelect
              direction={'bottom'}
              curType={curType}
              setCurType={setCurType}
            />
          }
        />
      </div>
    </div>
  );
};
