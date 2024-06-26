import React from 'react';
import { IMember } from '../../__data__/type/kanban.type';
import { useClickOutside } from '../../../../hooks/use-click-outside';
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
  // const members = useTypedSelector((state) => state.curProj.members);
  const { ref } = useClickOutside(setShowAssignee);

  return showAssignee ? (
    <SAssigneeModal ref={ref}>
      {/* {[...members].map((member, i) => {
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
      })} */}
    </SAssigneeModal>
  ) : (
    <SIconCont onClick={() => setShowAssignee(true)}>
      {/*<FontAwesomeIcon icon={faUserPlus} />*/}
    </SIconCont>
  );
};
