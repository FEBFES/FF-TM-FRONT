import React from 'react';
import { IMember } from '../../pages/KanbanPage/store/kanban.type';
import { Avatar, AvatarSizesType } from '../avatar/avatar';
import { Tooltip } from '../tooltip/tooltip';
import { PlacementType } from '../tooltip/tooltip';
import { getAvatarUrlOrHuman } from '../../utils/utils';
import {
  SAvatarGroupContainer,
  SAvatarCont,
  SOtherMember,
} from './avatar-group.styled';

interface AvatarGroupProps {
  members: IMember[];
  maxCount?: number;
  placement?: PlacementType;
  avatarSize: AvatarSizesType;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  members,
  maxCount,
  avatarSize,
  placement,
}): JSX.Element => {
  const otherMember = members.length - (maxCount || 0);

  return (
    <SAvatarGroupContainer
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
            <SAvatarCont key={`${i}-${member.id}`}>
              <Avatar
                size={avatarSize}
                src={getAvatarUrlOrHuman(member?.userPic)}
              />
            </SAvatarCont>
          </Tooltip>
        );
      })}
      {maxCount !== undefined && (
        <SOtherMember
          style={{
            left: `${maxCount * 14}px`,
            zIndex: maxCount + 1,
          }}
        >
          +{otherMember}
        </SOtherMember>
      )}
    </SAvatarGroupContainer>
  );
};
