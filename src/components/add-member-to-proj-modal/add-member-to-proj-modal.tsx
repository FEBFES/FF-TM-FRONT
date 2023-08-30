import React, { useEffect, useState } from 'react';
import styles from './add-member-to-proj-modal.module.css';
import { Modal } from '../../ui/modal/modal';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { IMember } from '../../pages/KanbanPage/store/kanban.type';
import { MemberCard } from '../../pages/KanbanPage/components/MemberCard/MemberCard';
import { instance } from '../../api/http';
import { fetchAddMemberToProject } from '../../pages/KanbanPage/store/kanban.thunk';
import { Title } from '../../ui/Typography';
import { CloseIcon } from '../../assets/icons/UtilsIcons';
import { InputField } from '../../ui/input-field/Input-field';
import { Button } from '../../ui/Button/Button';
import { AvatarGroup } from '../../ui/AvatarGroup/AvatarGroup';

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
    <Modal show={show} setShow={setShow}>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <Title level={'h4'}>Добавить участника</Title>

          <div onClick={() => setShow(false)}>
            <CloseIcon />
          </div>
        </div>

        <div className={styles.modal__search}>
          <InputField
            withLabel
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
            <AvatarGroup members={selectedUsers} avatarSize={'m'} />
          </div>
        )}

        <div className={styles.modal__footer}>
          <Button
            disabled={selectedUsers.length === 0}
            variant={'secondary'}
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
