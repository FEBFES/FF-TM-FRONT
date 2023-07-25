import React from 'react';
import styles from './MemberCard.module.css';
import { IMember } from '../../../KanbanPage/store/kanban.type';
import { Avatar } from '../../../../ui/Avatar/Avatar';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { Title, Text } from '../../../../ui/Typography';
import { Tooltip } from '../../../../ui/Tooltip/Tooltip';
import i18n from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons/faTrashCan';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { fetchDeleteMemberFromProject } from '../../../KanbanPage/store/kanban.thunk';

interface MemberCardProps {
  member: IMember;
}

export const MemberCard: React.FC<MemberCardProps> = ({
  member,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const projId = useTypedSelector((state) => state.curProj.projId);

  return (
    <div className={styles.memberCard}>
      <div className={styles.memberCard__left}>
        <Avatar src={getAvatarUrlOrHuman(member.userPic)} />
        <div className={styles.memberCard__info}>
          <Title level={'h6'}>{member.email}</Title>
          <Text>{member.username}</Text>
        </div>
      </div>

      <Tooltip title={i18n.t('utils.buttons.delete')}>
        <div
          className={styles.trashBtn}
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
        </div>
      </Tooltip>
    </div>
  );
};
