import React from 'react';
import styles from './MemberCard.module.css';
import { Avatar } from '../../../../ui/Avatar/Avatar';
import { serverString } from '../../../../config';
import human from '../../../../assets/img/human.png';
import { IMember } from '../../store/kanban.type';
import classNames from 'classnames';

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
    <div
      className={classNames(styles.assignee__card, {
        [styles.assignee__card_border]: bordered,
      })}
      onClick={onClick}
    >
      <Avatar
        size={'xs'}
        src={member.userPic ? `${serverString}${member.userPic}` : human}
      />
      <p>{member.username}</p>
      <span>{member.email}</span>
    </div>
  );
};
