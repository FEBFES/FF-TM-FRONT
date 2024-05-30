import React, { useEffect, useState } from 'react';
import styles from './add-member-to-proj-modal.module.css';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { IMember } from '../../pages/kanban/__data__/type/kanban.type';
import { MemberCard } from '../../pages/kanban/components/member-card/member-card';
// import { instance } from '../../api/http';
// import { fetchAddMemberToProject } from '../../__data__/middleware/kanban.thunk';
import { Modal, Input } from 'antd';

interface AddMemberToProjModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
}

export const AddMemberToProjModal: React.FC<AddMemberToProjModalProps> = ({
  show,
  setShow,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  // const projId = useTypedSelector((state) => state.curProj.projId);
  const [users, setUsers] = useState<IMember[] | []>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedUsers, setSelectedUsers] = useState<IMember[]>([]);

  //todo change this to redux (mb to -> redux rtq)
  // useEffect(() => {
  //   instance.get('/users').then((res) => {
  //     if (res.status === 200) {
  //       setUsers(res.data);
  //     }
  //   });
  // }, []);

  const addMemberToProj = (memberIds: IMember[]) => {
    // @ts-ignore
    // const ids: number[] = memberIds.map((el) => el.id);
    // projId &&
    //   dispatch(
    //     fetchAddMemberToProject({ projId: projId, memberIds: ids })
    //   ).finally(() => {
    //     setShow(false);
    //   });
  };

  const selectUserHandler = (member: IMember) => {
    const isMemberInArr = selectedUsers.find((el) => el.id === member.id);
    !isMemberInArr && setSelectedUsers([...selectedUsers, member]);
  };

  const cancelHandler = () => {
    setSelectedUsers([]);
    setShow(false);
  };

  const submitHandler = () => {
    addMemberToProj(selectedUsers);
  };

  return (
    <Modal
      title={'Добавить участника'}
      open={show}
      onCancel={cancelHandler}
      cancelText={'Отменить'}
      onOk={submitHandler}
      okText={'Добавить'}
    >
      <div className={styles.modal}>
        <div className={styles.modal__search}>
          <Input
            placeholder={'Введите логин или email'}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div className={`${styles.modal__users} scrollbar`}>
          {users.length ? (
            users.map((member: IMember) => {
              return (
                <MemberCard
                  member={member}
                  onClick={() => selectUserHandler(member)}
                />
              );
            })
          ) : (
            <div>Пользователи не найдены...</div>
          )}
        </div>

        {selectedUsers.length !== 0 && (
          <div className={styles.modal__selectedUsers}>
            {/*//todo*/}
            {/*<AvatarGroup members={selectedUsers} avatarSize={'m'} />*/}
          </div>
        )}
      </div>
    </Modal>
  );
};
