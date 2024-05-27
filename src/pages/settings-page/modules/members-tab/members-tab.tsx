import React, { useState } from 'react';
import { Typography, Button, Flex, Card, Space, Avatar } from 'antd';
import { useTypedSelector } from '../../../../hooks/redux';
import { SHeader, SMemberCard, SMemberContainer } from './members-tab.styled';
import { AddMemberToProjModal } from '../../../../components/add-member-to-proj-modal/add-member-to-proj-modal';
import { SectionTitle } from '../../components/section-title/section-title';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';

interface MembersTabProps {}

export const MembersTab: React.FC<MembersTabProps> = (): JSX.Element => {
  const members = useTypedSelector((state) => state.curProj.members);
  const [showAddMemberModal, setShowAddMemberModal] = useState<boolean>(false);

  return (
    <>
      <Card>
        <SHeader>
          <SectionTitle
            title={'Настройка участников проекта'}
            desc={'Редактируйте доступ к вашему проекту'}
          />

          <Button type={'primary'} onClick={() => setShowAddMemberModal(true)}>
            + Добавить участника
          </Button>
        </SHeader>
      </Card>

      {/*Todo поменять на список*/}
      {/*https://ant.design/components/list*/}
      <SMemberContainer>
        {members.map((member) => {
          return (
            <SMemberCard>
              <Flex justify={'space-between'} align={'center'}>
              <Flex align={'center'}>
                  <Avatar src={getAvatarUrlOrHuman(member.userPic)} />

                  <Flex vertical>
                      <Typography>{member.username}</Typography>
                      <Typography>{member.email}</Typography>
                  </Flex>
            </Flex>

                <Space>
                  <Typography>{member.roleOnProject}</Typography>
                </Space>
              </Flex>
            </SMemberCard>
          );
        })}
      </SMemberContainer>

      <AddMemberToProjModal
        show={showAddMemberModal}
        setShow={setShowAddMemberModal}
      />
    </>
  );
};
