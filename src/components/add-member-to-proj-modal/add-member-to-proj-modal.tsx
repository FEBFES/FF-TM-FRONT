import React, { useEffect, useState } from 'react';
import styles from './add-member-to-proj-modal.module.css';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { IMember } from '../../pages/kanban-page/store/kanban.type';
import { MemberCard } from '../../pages/kanban-page/components/member-card/member-card';
import { instance } from '../../api/http';
import { fetchAddMemberToProject } from '../../pages/kanban-page/store/kanban.thunk';
import { Typography, Modal, Input, Button } from 'antd';
import { CloseIcon } from '../../assets/icons/UtilsIcons';

interface AddMemberToProjModalProps {
  show: boolean;
  setShow: (bool: boolean) => void;
}

export const AddMemberToProjModal: React.FC<AddMemberToProjModalProps> = ({
  show,
  setShow,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const projId = useTypedSelector((state) => state.curProj.projId);
  const [users, setUsers] = useState<IMember[] | []>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedUsers, setSelectedUsers] = useState<IMember[]>([]);

  //todo change this to redux (mb to -> redux rtq)
  useEffect(() => {
    instance.get('/users').then((res) => {
      if (res.status === 200) {
        setUsers(res.data);
      }
    });
  }, []);

  const addMemberToProj = (memberIds: IMember[]) => {
    // @ts-ignore
    const ids: number[] = memberIds.map((el) => el.id);
    projId &&
      dispatch(
        fetchAddMemberToProject({ projId: projId, memberIds: ids })
      ).finally(() => {
        setShow(false);
      });
  };

  const selectUserHandler = (member: IMember) => {
    const isMemberInArr = selectedUsers.find((el) => el.id === member.id);
    !isMemberInArr && setSelectedUsers([...selectedUsers, member]);
  };

  return (
    <Modal open={show}>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <Typography>Добавить участника</Typography>

          <div onClick={() => setShow(false)}>
            <CloseIcon />
          </div>
        </div>

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
            //todo
            {/*<AvatarGroup members={selectedUsers} avatarSize={'m'} />*/}
          </div>
        )}

        <div className={styles.modal__footer}>
          <Button
            disabled={selectedUsers.length === 0}
            onClick={() => setSelectedUsers([])}
          >
            Отмена
          </Button>
          <Button
            disabled={selectedUsers.length === 0}
            onClick={() => addMemberToProj(selectedUsers)}
          >
            Добавить
          </Button>
        </div>
      </div>
    </Modal>
  );
};
