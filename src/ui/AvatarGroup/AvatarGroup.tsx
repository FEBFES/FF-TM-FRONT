import React from 'react';
import { IMember } from '../../pages/KanbanPage/store/kanban.type';
import styles from './AvatarGroup.module.css';
import { Avatar } from '../Avatar/Avatar';
import human from '../../assets/img/human.png';
import { serverString } from '../../config';
import { Tooltip } from '../Tooltip/Tooltip';

interface AvatarGroupProps {
  members: IMember[];
  maxCount?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  members,
  maxCount,
}): JSX.Element => {
  const otherMember = members.length - (maxCount || 0);

  return (
    <div
      className={styles.avatarGroupCont}
      style={{
        marginRight: `${18 * (maxCount ? maxCount : members.length)}px`,
      }}
    >
      {members.map((member: IMember, i: number) => {
        if (maxCount && i + 1 > maxCount) return null;
        return (
          <div
            key={`${i}-${member.id}`}
            className={styles.avatarCont}
            style={{
              left: `${i * 15}px`,
              zIndex: `${i + 1}`,
            }}
          >
            <Tooltip
              placement={'bottom'}
              title={`${member.username || member}`}
            >
              <Avatar
                size={'fit'}
                src={
                  member?.userPic ? `${serverString}${member.userPic}` : human
                }
              />
            </Tooltip>
          </div>
        );
      })}
      {maxCount !== undefined && (
        <div
          style={{
            left: `${maxCount * 15}px`,
            zIndex: maxCount + 1,
          }}
          className={styles.otherMember}
        >
          +{otherMember}
        </div>
      )}
    </div>
  );
};
