import React from 'react';
import { IMember } from '../../pages/KanbanPage/store/kanban.type';
import styles from './AvatarGroup.module.css';
import { Avatar } from '../Avatar/Avatar';
import { Tooltip } from '../tooltip/tooltip';
import { PlacementType } from '../tooltip/tooltip';
import { getAvatarUrlOrHuman } from '../../utils/utils';

interface AvatarGroupProps {
  members: IMember[];
  maxCount?: number;
  placement?: PlacementType;
  avatarSize: '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | 'fit';
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  members,
  maxCount,
  avatarSize,
  placement,
}): JSX.Element => {
  const otherMember = members.length - (maxCount || 0);

  return (
    <div
      className={styles.avatarGroupCont}
      style={{
        marginRight: `-${10 * (maxCount ? maxCount : members.length)}px`,
      }}
    >
      {members.map((member: IMember, i: number) => {
        if (maxCount && i + 1 > maxCount) return null;
        return (
          <Tooltip
            key={member.id}
            placement={placement}
            title={`${member.username || member}`}
            style={{
              right: `${i * 10}px`,
              zIndex: `${i + 1}`,
            }}
          >
            <div key={`${i}-${member.id}`} className={styles.avatarCont}>
              <Avatar
                size={avatarSize}
                src={getAvatarUrlOrHuman(member?.userPic)}
              />
            </div>
          </Tooltip>
        );
      })}
      {maxCount !== undefined && (
        <div
          style={{
            left: `${maxCount * 14}px`,
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
