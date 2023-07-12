import React, { useState } from 'react';
import styles from './TaskCard.module.css';
import { delTaskFromCol } from '../../store/kanban.slice';
import { useAppDispatch } from '../../../../hooks/redux';
import { AttachmentsIcon } from '../../../../assets/icons/TaskIcons';
import human from '../../../../assets/img/human.png';
import { fetchGetTaskInfo } from '../../store/kanban.thunk';
import { TaskCardProps } from './TaskCard.props';
import moment from 'moment';
import { DotsIcon } from '../../../../assets/icons/UtilsIcons';
import { DropDown } from '../../../../ui/DropDown/DropDown';
import { TaskLabel } from '../../../../ui/TaskLabel/TaskLabel';
import { PriorityLabel } from '../../../../ui/PriorityLabel/PriorityLabel';
import i18n from 'i18next';
import { Avatar } from '../../../../ui/Avatar/Avatar';

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  delTask,
  setShowTaskModal,
}): JSX.Element => {
  const [showDD, setShowDD] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <div
      onDragStart={(e: any) => {
        e.dataTransfer.setData('task', JSON.stringify(task));
        setTimeout(() => {
          e.target.style.display = 'none';
          dispatch(delTaskFromCol(task));
        }, 0);
      }}
      className={styles.task}
      draggable
      id={`${task.id}`}
    >
      <div className={styles.header}>
        <div className={styles.header_left}>
          <PriorityLabel priority={task.priority} />
          <h4 className={styles.task_id}>#{task.id || ''}</h4>
        </div>

        <Avatar
          size={'s'}
          src={
            task.owner?.userPic
              ? `http://febfes.com/api/v1${task.owner.userPic}`
              : human
          }
        />
      </div>

      <div className={styles.task__main}>
        <h1
          className={styles.task_title}
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
          {task.name || ''}
        </h1>
        <span className={styles.task_creationDate}>
          {moment(task.createDate).format('MMM DD')}
        </span>
      </div>

      <div className={styles.task__footer}>
        <div className={styles.footer_left}>
          <TaskLabel type={task.type} />
        </div>

        <div className={styles.footer_right}>
          {/*<div className={styles.task_attachments}>*/}
          {/*  <span className={styles.task_attachments_counter}>8</span>*/}
          {/*  <CommentsIcon />*/}
          {/*</div>*/}
          {task.filesCounter !== 0 && (
            <div className={styles.task_attachments}>
              <span className={styles.task_attachments_counter}>
                {task.filesCounter || ''}
              </span>
              <AttachmentsIcon />
            </div>
          )}
          <div
            onClick={() => setShowDD(true)}
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
    </div>
  );
};
