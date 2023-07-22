import React from 'react';
import styles from './MemberCard.module.css';
import { IMember } from '../../KanbanPage/store/kanban.type';
import { Avatar } from '../../../ui/Avatar/Avatar';
import { getAvatarUrlOrHuman } from '../../../utils/utils';
import { Title, Text } from '../../../ui/Typography';

interface MemberCardProps {
  member: IMember;
}

export const MemberCard: React.FC<MemberCardProps> = ({
  member,
}): JSX.Element => {
  return (
    <div className={styles.memberCard}>
      <Avatar src={getAvatarUrlOrHuman(member.userPic)} />
      <div className={styles.memberCard__info}>
        <Title level={'h6'}>{member.email}</Title>
        <Text>{member.username}</Text>
      </div>
    </div>
  );
};
