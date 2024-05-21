import React from 'react';
import { Avatar } from 'antd';

import { IMember } from '../../store/kanban.type';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { SAssigneeCard } from './member-card.styled';

interface MemberCardProps {
  member: IMember;
  onClick: any;
  bordered?: boolean;
}

export const MemberCard: React.FC<MemberCardProps> = ({
  member,
  onClick,
  bordered = false,
}): JSX.Element => {
  return (
    <SAssigneeCard bordered={bordered} onClick={onClick}>
      <Avatar src={getAvatarUrlOrHuman(member.userPic)} />
      <p>{member.username}</p>
      <span>{member.email}</span>
    </SAssigneeCard>
  );
};
