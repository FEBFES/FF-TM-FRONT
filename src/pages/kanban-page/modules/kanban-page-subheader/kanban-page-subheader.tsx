import React, { useState } from 'react';
import {
  FilterCard,
  PrioritySelect,
  IPriorityType,
  ITypeSelectType,
  TypeSelect,
  KanbanViewSwitcher,
} from '../../components';

import i18n from 'i18next';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import {
  clearAllFilters,
  delFilters,
  setFilters,
} from '../../store/kanban.slice';
import { AddMemberToProjModal } from '../../../../components/add-member-to-proj-modal/add-member-to-proj-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Flex, Space, AvatarGroup } from '../../../../ui';
import {
  SSubHeader,
  SClearFiltersButton,
  SIcon,
} from './kanban-page-subheader.styled';

export const KanbanPageSubheader: React.FC = () => {
  const dispatch = useAppDispatch();
  const [showAddMemberModal, setShowAddMemberModal] = useState<boolean>(false);
  const filters = useTypedSelector((state) => state.curProj.filters);
  const haveFilters = filters.length >= 1;
  const curType = filters.find((el) => el.key === 'taskType')?.value || 'NONE';
  const curPriority =
    filters.find((el) => el.key === 'taskPriority')?.value || 'DEFAULT';
  const members = useTypedSelector((state) => state.curProj.members);

  return (
    <SSubHeader>
      <Flex jc={'start'}>
        <KanbanViewSwitcher />
        <Space direction="row" size={'l'} />
        <AvatarGroup placement={'top'} members={members} avatarSize={'s'} />
        <SIcon onClick={() => setShowAddMemberModal(true)}>
          <FontAwesomeIcon icon={faUserPlus} size={'sm'} />
        </SIcon>
      </Flex>

      <Flex ai={'center'}>
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
          <SClearFiltersButton onClick={() => dispatch(clearAllFilters())}>
            {i18n.t('pages.kanban.subheader.clear.btn')}
          </SClearFiltersButton>
        )}
      </Flex>

      {showAddMemberModal && (
        <AddMemberToProjModal
          show={showAddMemberModal}
          setShow={setShowAddMemberModal}
        />
      )}
    </SSubHeader>
  );
};
