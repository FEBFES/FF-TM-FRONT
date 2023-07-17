import React from 'react';
import styles from './AddAssigneeModal.module.css';
import { MemberCard } from '../MemberCard/MemberCard';
import { useTypedSelector } from '../../../../hooks/redux';
import { IMember } from '../../store/kanban.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

interface AddAssigneeModalProps {
  showAssignee: boolean;
  setCurAssignee: (member: IMember) => void;
  setShowAssignee: (show: boolean) => void;
}

export const AddAssigneeModal: React.FC<AddAssigneeModalProps> = ({
  showAssignee,
  setShowAssignee,
  setCurAssignee,
}): JSX.Element => {
  const members = useTypedSelector((state) => state.projectKanban.members);

  return showAssignee ? (
    <div className={styles.assignee__modal}>
      {[...members].map((member, i) => {
        return (
          <MemberCard
            key={member.id}
            onClick={() => {
              setCurAssignee(member);
              setShowAssignee(false);
            }}
            member={member}
          />
        );
      })}
    </div>
  ) : (
    <div className={styles.icon__cont} onClick={() => setShowAssignee(true)}>
      <FontAwesomeIcon icon={faUserPlus} />
    </div>
  );
};
