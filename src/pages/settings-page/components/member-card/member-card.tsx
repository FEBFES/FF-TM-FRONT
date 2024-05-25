import React from 'react';
import { IMember } from '../../../kanban-page/store/kanban.type';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import i18n from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons/faTrashCan';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { fetchDeleteMemberFromProject } from '../../../kanban-page/store/kanban.thunk';
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
  const projId = useTypedSelector((state) => state.curProj.projId);
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
