import React from 'react';
import { MemberCard } from '../../components/member-card/member-card';
import { useTypedSelector } from '../../../../hooks/redux';
import { IMember } from '../../store/kanban.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useClickOutside } from '../../../../hooks/useClickOutside';
import { SAssigneeModal, SIconCont } from './add-assignee-modal.styled';

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
  const members = useTypedSelector((state) => state.curProj.members);
  const { ref } = useClickOutside(setShowAssignee);

  return showAssignee ? (
    <SAssigneeModal ref={ref}>
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
    </SAssigneeModal>
  ) : (
    <SIconCont onClick={() => setShowAssignee(true)}>
      <FontAwesomeIcon icon={faUserPlus} />
    </SIconCont>
  );
};
