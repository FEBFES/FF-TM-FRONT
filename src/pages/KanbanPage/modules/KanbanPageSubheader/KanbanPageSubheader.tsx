import React, { useState } from 'react';
import styles from './KanbanPageSubheader.module.css';
import { FilterCard } from '../../components/FilterCard/FilterCard';
import { PrioritySelect } from '../../components/PrioritySelect/PrioritySelect';
import { TypeSelect } from '../../components/TypeSelect/TypeSelect';
import { IPriorityType } from '../../components/PrioritySelect/PrioritySelect.type';
import { ITaskLabelType } from '../../../../ui/TaskLabel/TaskLabel.props';

interface TableViewControllerProps {}

export const KanbanPageSubheader: React.FC<
  TableViewControllerProps
> = (): JSX.Element => {
  const [curType, setCurType] = useState<ITaskLabelType>('NONE');
  const [curPriority, setCurPriority] = useState<IPriorityType>('DEFAULT');

  return (
    <div className={styles.subheader}>
      <div className={styles.filters__cont}>
        <FilterCard
          title={'Priority'}
          component={
            <PrioritySelect
              direction={'bottom'}
              curPriority={curPriority}
              setCurPriority={setCurPriority}
            />
          }
        />
        <FilterCard
          title={'Type'}
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
