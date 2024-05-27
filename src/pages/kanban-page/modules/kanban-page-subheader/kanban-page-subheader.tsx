import React, { useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import {
  // clearAllFilters,
  // delFilters,
  setCurView,
  // setFilters,
} from '../../store/kanban.slice';
import { AddMemberToProjModal } from '../../../../components/add-member-to-proj-modal/add-member-to-proj-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Flex, Avatar, Segmented, Button, Dropdown } from 'antd';
import { SSubHeader, SIcon } from './kanban-page-subheader.styled';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import {
  AppstoreOutlined,
  BarsOutlined,
  FilterFilled,
} from '@ant-design/icons';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';

export const KanbanPageSubheader: React.FC = () => {
  const dispatch = useAppDispatch();
  const [showAddMemberModal, setShowAddMemberModal] = useState<boolean>(false);
  // const filters = useTypedSelector((state) => state.curProj.filters);
  // const haveFilters = filters.length >= 1;
  // const curType = filters.find((el) => el.key === 'taskType')?.value || 'NONE';
  // const curPriority =
  //   filters.find((el) => el.key === 'taskPriority')?.value || 'DEFAULT';
  const members = useTypedSelector((state) => state.curProj.members);
  const curView = useTypedSelector((state) => state.curProj.curView);
  return (
    <SSubHeader>
      <Segmented
        onChange={(e) => dispatch(setCurView(e))}
        defaultValue={curView}
        size={'small'}
        options={[
          {
            label: useBreakpoint().xs ? '' : 'Список',
            value: 'list',
            icon: <BarsOutlined />,
          },
          {
            label: useBreakpoint().xs ? '' : 'Доска',
            value: 'kanban',
            icon: <AppstoreOutlined />,
          },
        ]}
      />

      <div>
        <Dropdown
          menu={{
            items: [
              {
                label: 'asdas',
                key: 'a',
              },
            ],
          }}
        >
          <Button size={'small'}>
            type
            <FilterFilled />
          </Button>
        </Dropdown>

        <Dropdown
          menu={{
            items: [
              {
                label: 'asdasd',
                key: '123',
              },
            ],
          }}
        >
          <Button size={'small'}>
            priority
            <FilterFilled />
          </Button>
        </Dropdown>
      </div>
      {/*<Flex>*/}
      {/*  <FilterCard*/}
      {/*    title={i18n.t('utils.any.type')}*/}
      {/*    component={*/}
      {/*      <TypeSelect*/}
      {/*        direction={'bottom'}*/}
      {/*        curType={curType as ITypeSelectType}*/}
      {/*        setCurType={(type) => {*/}
      {/*          const curType = type === 'NONE' ? null : type;*/}
      {/*          if (curType) {*/}
      {/*            dispatch(setFilters({ key: 'taskType', value: type }));*/}
      {/*          } else {*/}
      {/*            dispatch(delFilters('taskType'));*/}
      {/*          }*/}
      {/*        }}*/}
      {/*      />*/}
      {/*    }*/}
      {/*  />*/}
      {/*  <FilterCard*/}
      {/*    title={i18n.t('utils.any.priority')}*/}
      {/*    component={*/}
      {/*      <PrioritySelect*/}
      {/*        direction={'bottom'}*/}
      {/*        curPriority={curPriority as IPriorityType}*/}
      {/*        setCurPriority={(priority) => {*/}
      {/*          const curPriority = priority === 'DEFAULT' ? null : priority;*/}
      {/*          if (curPriority) {*/}
      {/*            dispatch(*/}
      {/*              setFilters({ key: 'taskPriority', value: priority })*/}
      {/*            );*/}
      {/*          } else {*/}
      {/*            dispatch(delFilters('taskPriority'));*/}
      {/*          }*/}
      {/*        }}*/}
      {/*      />*/}
      {/*    }*/}
      {/*  />*/}

      {/*  {haveFilters && (*/}
      {/*    <SClearFiltersButton onClick={() => dispatch(clearAllFilters())}>*/}
      {/*      Очистить фильтры*/}
      {/*    </SClearFiltersButton>*/}
      {/*  )}*/}
      {/*</Flex>*/}

      {showAddMemberModal && (
        <AddMemberToProjModal
          show={showAddMemberModal}
          setShow={setShowAddMemberModal}
        />
      )}
    </SSubHeader>
  );
};
