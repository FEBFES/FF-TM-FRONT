import React from 'react';
import { IMember } from '../../../kanban/__data__/type/kanban.type';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { Space, Avatar, Flex, Tooltip, Typography } from 'antd';
import {
  SMemberCard,
  SMemberCardInfo,
  SMemberCardLeft,
  STrashButton,
} from './member-card.styled';

interface MemberCardProps {
  member: IMember;
}

export const MemberCard: React.FC<MemberCardProps> = ({
  member,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  // const projId = useTypedSelector((state) => state.curProj.projId);
  // const memberRoles: IMemberRole[] = ['MEMBER', 'MEMBER_PLUS', 'OWNER'];

  return (
    <SMemberCard>
      <SMemberCardLeft>
        <Avatar src={getAvatarUrlOrHuman(member.userPic)} />
        <SMemberCardInfo>
          <Typography>{member.email}</Typography>
          <Typography>{member.username}</Typography>
        </SMemberCardInfo>
      </SMemberCardLeft>

      <Flex>
        {/*//todo*/}
        {/*<Select*/}
        {/*  onChange={(role: IMemberRole) => {*/}
        {/*    projId &&*/}
        {/*      member.id &&*/}
        {/*      dispatch(*/}
        {/*        fetchChangeMemberRole({*/}
        {/*          roleName: role,*/}
        {/*          projId: projId,*/}
        {/*          userId: member.id,*/}
        {/*        })*/}
        {/*      );*/}
        {/*  }}*/}
        {/*  defaultValue={member.roleOnProject}*/}
        {/*  optionsArr={memberRoles}*/}
        {/*/>*/}
        <Space />
        <Tooltip title={'Удалить'}>
          <STrashButton
          // onClick={() =>
          //   projId &&
          //   member.id &&
          //   dispatch(
          //     fetchDeleteMemberFromProject({
          //       projId: projId,
          //       memberId: member.id,
          //     })
          //   )
          // }
          >
            deleteIcon
          </STrashButton>
        </Tooltip>
      </Flex>
    </SMemberCard>
  );
};
