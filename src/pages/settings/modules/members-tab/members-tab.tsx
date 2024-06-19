import React, { useState } from 'react';
import { Button, Card } from 'antd';
import { SHeader, SMemberContainer } from './members-tab.styled';
import { SectionTitle } from '../../components/section-title/section-title';
interface MembersTabProps {}

export const MembersTab: React.FC<MembersTabProps> = (): JSX.Element => {
  // const members = useTypedSelector((state) => state.curProj.members);
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
        {/* //todo */}

        {/* {members.map((member: IMember) => {
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
        })} */}
      </SMemberContainer>

      {/*<AddMemberToProjModal*/}
      {/*  show={showAddMemberModal}*/}
      {/*  setShow={setShowAddMemberModal}*/}
      {/*/>*/}
    </>
  );
};
