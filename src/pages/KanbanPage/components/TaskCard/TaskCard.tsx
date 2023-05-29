import React, { useState } from 'react';
import styles from './TaskCard.module.css';
import { delTaskFromCol } from '../../store/kanban.slice';
import { useAppDispatch } from '../../../../hooks/redux';
import {
  AttachmentsIcon,
  CommentsIcon,
  PriorityDefault,
  PriorityHigh,
  PriorityLow,
  PriorityMedium,
} from '../../../../assets/icons/TaskIcons';
import human from '../../../../assets/img/human.png';
import { fetchGetTaskInfo } from '../../store/kanban.thunk';
import { TaskCardProps } from './TaskCard.props';
import moment from 'moment';
import classNames from 'classnames';
import { DotsIcon } from '../../../../assets/icons/UtilsIcons';
import { DropDown } from '../../../../ui/DropDown/DropDown';

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
          <div className={styles.task_priority}>
            {task.priority === null && <PriorityDefault />}
            {task.priority === 'LOW' && <PriorityLow />}
            {task.priority === 'MEDIUM' && <PriorityMedium />}
            {task.priority === 'HIGH' && <PriorityHigh />}
          </div>
          <h4 className={styles.task_id}>#{task.id || ''}</h4>
        </div>

        <div className={styles.task_avatar}>
          <img
            src={
              task.ownerUserPic
                ? `http://febfes.com/api/v1${task.ownerUserPic}`
                : human
            }
            alt="avatar"
          />
        </div>
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
          {task.type !== 'NONE' && task.type && (
            <div
              className={classNames(`${styles.task_label}`, {
                [styles.task_label_q]: task.type === 'QUESTION',
                [styles.task_label_r]: task.type === 'RESEARCH',
                [styles.task_label_b]: task.type === 'BUG',
                [styles.task_label_f]: task.type === 'FEATURE',
              })}
            >
              {task.type.toLowerCase()}
            </div>
          )}
        </div>

        <div className={styles.footer_right}>
          <div className={styles.task_attachments}>
            <span className={styles.task_attachments_counter}>8</span>
            <CommentsIcon />
          </div>
          <div className={styles.task_attachments}>
            <span className={styles.task_attachments_counter}>2</span>
            <AttachmentsIcon />
          </div>
          <div
            onClick={() => setShowDD(true)}
            className={styles.task_attachments}
          >
            <DropDown show={showDD} setShow={setShowDD}>
              <p onClick={() => delTask(task.columnId, task.id)}>Delete</p>
            </DropDown>
            <DotsIcon w={12} />
          </div>
        </div>
      </div>
    </div>
  );
};
