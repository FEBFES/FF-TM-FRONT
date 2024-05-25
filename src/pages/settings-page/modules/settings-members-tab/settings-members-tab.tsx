import React, { useState } from 'react';
import { Typography, Table, Button, Flex } from 'antd';
import { useTypedSelector } from '../../../../hooks/redux';
import { SHeader } from './settings-members-tab.styled';
import { AddMemberToProjModal } from '../../../../components/add-member-to-proj-modal/add-member-to-proj-modal';
import { columns } from './columns';

interface MembersTabProps {}

export const SettingsMembersTab: React.FC<
  MembersTabProps
> = (): JSX.Element => {
  const members = useTypedSelector((state) => state.curProj.members);
  const [showAddMemberModal, setShowAddMemberModal] = useState<boolean>(false);

  return (
    <div>
      <SHeader>
        <Flex vertical>
          <Typography.Title level={4}>
            Настройка участников проекта
          </Typography.Title>
          <Typography.Text>
            Редактируйте доступ к вашему проекту
          </Typography.Text>
        </Flex>

        <Button type={'primary'} onClick={() => setShowAddMemberModal(true)}>
          + Добавить участника
        </Button>
      </SHeader>
      <Table columns={columns} dataSource={members} />

      <AddMemberToProjModal
        show={showAddMemberModal}
        setShow={setShowAddMemberModal}
      />
    </div>
  );
};
