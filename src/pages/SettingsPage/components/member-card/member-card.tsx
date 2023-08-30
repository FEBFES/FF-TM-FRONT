import React from 'react';
import { IMember, IMemberRole } from '../../../KanbanPage/store/kanban.type';
import { Avatar } from '../../../../ui/Avatar/Avatar';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { Title, Text } from '../../../../ui/typography';
import { Tooltip } from '../../../../ui/tooltip/tooltip';
import i18n from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons/faTrashCan';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { fetchDeleteMemberFromProject } from '../../../KanbanPage/store/kanban.thunk';
import { Select } from '../../../../ui/select/select';
import { Flex } from '../../../../ui/Flex/Flex';
import { Space } from '../../../../ui/Space/Space';
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
  const projId = useTypedSelector((state) => state.curProj.projId);
  const memberRoles: IMemberRole[] = ['MEMBER', 'MEMBER_PLUS', 'OWNER'];

  return (
    <SMemberCard>
      <SMemberCardLeft>
        <Avatar src={getAvatarUrlOrHuman(member.userPic)} />
        <SMemberCardInfo>
          <Title level={'h6'}>{member.email}</Title>
          <Text>{member.username}</Text>
        </SMemberCardInfo>
      </SMemberCardLeft>

      <Flex>
        <Select
          // onlyView={true}
          defaultValue={member.role}
          optionsArr={memberRoles}
        />
        <Space />
        <Tooltip title={i18n.t('utils.buttons.delete')}>
          <STrashButton
            onClick={() =>
              projId &&
              member.id &&
              dispatch(
                fetchDeleteMemberFromProject({
                  projId: projId,
                  memberId: member.id,
                })
              )
            }
          >
            <FontAwesomeIcon size={'xs'} icon={faTrashCan} />
          </STrashButton>
        </Tooltip>
      </Flex>
    </SMemberCard>
  );
};
