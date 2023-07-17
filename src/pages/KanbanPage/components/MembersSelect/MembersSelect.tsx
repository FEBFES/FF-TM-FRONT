import React, { useEffect, useState } from 'react';
import styles from './MembersSelect.module.css';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { AvatarGroup } from '../../../../ui/AvatarGroup/AvatarGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { instance } from '../../../../api/http';
import { MemberCard } from '../MemberCard/MemberCard';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import { fetchAddMemberToProject } from '../../store/kanban.thunk';
import { IMember } from '../../store/kanban.type';

interface MembersSelectProps {}

export const MembersSelect: React.FC<MembersSelectProps> = (): JSX.Element => {
  const members = useTypedSelector((state) => state.projectKanban.members);
  const [users, setUsers] = useState<IMember[] | []>([]);
  const [showUsers, setShowUsers] = useState(false);
  const { ref } = useClickOutside(setShowUsers);
  const dispatch = useAppDispatch();
  const projId = useTypedSelector((state) => state.projectKanban.projId);

  useEffect(() => {
    instance.get('/users').then((res) => {
      if (res.status === 200) {
        setUsers(res.data);
      }
    });
  }, []);

  const addMemberToProj = (userId: number | null) => {
    projId &&
      userId &&
      dispatch(
        fetchAddMemberToProject({ projId: projId, memberIds: [userId] })
      );
  };

  return (
    <div className={styles.membersSelect}>
      <AvatarGroup placement={'top'} members={members} avatarSize={'s'} />
      <div onClick={() => setShowUsers(true)} className={styles.icon}>
        <FontAwesomeIcon icon={faUserPlus} size={'sm'} />
      </div>

      {showUsers && (
        <div ref={ref} className={styles.usersCont}>
          {users.map((user) => {
            return (
              <MemberCard
                member={user}
                onClick={() => {
                  addMemberToProj(user.id);
                  setShowUsers(false);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
