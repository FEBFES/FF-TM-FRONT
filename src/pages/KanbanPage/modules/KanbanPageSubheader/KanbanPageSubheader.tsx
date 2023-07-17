import React, { useState } from 'react';
import styles from './KanbanPageSubheader.module.css';
import { FilterCard } from '../../components/FilterCard/FilterCard';
import { PrioritySelect } from '../../components/PrioritySelect/PrioritySelect';
import { TypeSelect } from '../../components/TypeSelect/TypeSelect';
import { IPriorityType } from '../../components/PrioritySelect/PrioritySelect.type';
import { ITaskLabelType } from '../../../../ui/TaskLabel/TaskLabel.props';
import i18n from 'i18next';
import { KanbanViewSwitcher } from '../../components/KanbanViewSwitcher/KanbanViewSwitcher';
import { AvatarGroup } from '../../../../ui/AvatarGroup/AvatarGroup';
import { useTypedSelector } from '../../../../hooks/redux';

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
  const members = useTypedSelector((state) => state.projectKanban.members);

  return (
    <div className={styles.subheader}>
      <div className={styles.subheader__left}>
        <KanbanViewSwitcher curView={curView} setCurView={setCurView} />
        <AvatarGroup placement={'top'} members={members} avatarSize={'s'} />
      </div>

      <div className={styles.filters__cont}>
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
      </div>
    </div>
  );
};
