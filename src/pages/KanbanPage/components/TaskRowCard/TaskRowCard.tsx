import React, { useState } from 'react';
import styles from './TaskRowCard.module.css';
import { ITask } from '../TaskCard/TaskCard.type';
import { PriorityLabel } from '../../../../ui/PriorityLabel/PriorityLabel';
import { Avatar } from '../../../../ui/Avatar/Avatar';
import { serverString } from '../../../../config';
import human from '../../../../assets/img/human.png';
import { TaskLabel } from '../../../../ui/TaskLabel/TaskLabel';
import { fetchGetTaskInfo } from '../../store/kanban.thunk';
import { useAppDispatch } from '../../../../hooks/redux';
import { DropDown } from '../../../../ui/DropDown/DropDown';
import i18n from 'i18next';
import { DotsIcon } from '../../../../assets/icons/UtilsIcons';

export interface TaskRowCardProps {
  task: ITask;
  delTask: any;
  setShowTaskModal: (bool: boolean) => void;
}

export const TaskRowCard: React.FC<TaskRowCardProps> = ({
  task,
  delTask,
  setShowTaskModal,
}): JSX.Element => {
  const [showDD, setShowDD] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.card}>
      <div className={styles.card__info}>
        <div className={styles.card__info_header}>
          <PriorityLabel priority={task.priority} />
          <span className={styles.card__id}>#{task.id}</span>
        </div>
        <h1
          className={styles.card__title}
          onClick={() => {
            setShowTaskModal(true);
            dispatch(
              fetchGetTaskInfo({
                projId: task.projectId,
                colId: task.columnId,
                taskId: task.id,
              })
            );
          }}
        >
          {task.name}
        </h1>
        <p className={styles.card__desc}>{task.description}</p>
      </div>

      {/*todo change to grid*/}
      {/*<div className={styles.card__date}>*/}
      {/*    <FontAwesomeIcon icon={faCalendar}/>*/}
      {/*    {moment(task.createDate).format('DD.MM.YYYY')}*/}
      {/*</div>*/}

      <div className={styles.card__right}>
        <div className={styles.card_task_label}>
          <TaskLabel type={task.type} />
        </div>
        <Avatar
          size={'m'}
          src={
            task.owner.userPic ? `${serverString}${task.owner.userPic}` : human
          }
        />
        <div
          onClick={() => {
            setShowDD(true);
          }}
          className={styles.task_attachments}
        >
          <DropDown show={showDD} setShow={setShowDD}>
            <p
              className={styles.delBtn}
              onClick={() => delTask(task.columnId, task.id)}
            >
              {i18n.t('utils.buttons.delete')}
            </p>
          </DropDown>
          <DotsIcon w={12} />
        </div>
      </div>
    </div>
  );
};