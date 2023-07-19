import React from 'react';
import styles from './KanbanPageSubheader.module.css';
import { FilterCard } from '../../components/FilterCard/FilterCard';
import { PrioritySelect } from '../../components/PrioritySelect/PrioritySelect';
import {
  ITypeSelectType,
  TypeSelect,
} from '../../components/TypeSelect/TypeSelect';
import { IPriorityType } from '../../components/PrioritySelect/PrioritySelect.type';
import i18n from 'i18next';
import { KanbanViewSwitcher } from '../../components/KanbanViewSwitcher/KanbanViewSwitcher';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import {
  clearAllFilters,
  delFilters,
  setFilters,
} from '../../store/kanban.slice';
import { MembersSelect } from '../../components/MembersSelect/MembersSelect';
import { Space } from '../../../../ui/Space/Space';

export const KanbanPageSubheader: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useTypedSelector((state) => state.projectKanban.filters);
  const haveFilters = filters.length >= 1;
  const curType = filters.find((el) => el.key === 'taskType')?.value || 'NONE';
  const curPriority =
    filters.find((el) => el.key === 'taskPriority')?.value || 'DEFAULT';

  return (
    <div className={styles.subheader}>
      <div className={styles.subheader__left}>
        <KanbanViewSwitcher />
        <Space mx={'l'} />
        <MembersSelect />
      </div>

      <div className={styles.filters__cont}>
        <FilterCard
          title={i18n.t('utils.any.type')}
          component={
            <TypeSelect
              direction={'bottom'}
              curType={curType as ITypeSelectType}
              setCurType={(type) => {
                const curType = type === 'NONE' ? null : type;
                if (curType) {
                  dispatch(setFilters({ key: 'taskType', value: type }));
                } else {
                  dispatch(delFilters('taskType'));
                }
              }}
            />
          }
        />
        <FilterCard
          title={i18n.t('utils.any.priority')}
          component={
            <PrioritySelect
              direction={'bottom'}
              curPriority={curPriority as IPriorityType}
              setCurPriority={(priority) => {
                const curPriority = priority === 'DEFAULT' ? null : priority;
                if (curPriority) {
                  dispatch(
                    setFilters({ key: 'taskPriority', value: priority })
                  );
                } else {
                  dispatch(delFilters('taskPriority'));
                }
              }}
            />
          }
        />

        {haveFilters && (
          <div
            className={styles.clearFilters_btn}
            onClick={() => dispatch(clearAllFilters())}
          >
            {i18n.t('pages.kanban.subheader.clear.btn')}
          </div>
        )}
      </div>
    </div>
  );
};
