import React from 'react';
import styles from './TaskCard.module.css';
import { delTaskFromCol } from '../../store/dashboard.slice';
import { useAppDispatch } from '../../../../hooks/redux';
import {
  AttachmentsIcon,
  CommentsIcon,
  PriorityDefault,
} from '../../../../assets/icons/TaskIcons';
import human from '../../../../assets/img/human.png';
import { fetchGetTaskInfo } from '../../store/dashboard.thunk';
import { TaskCardProps } from './TaskCard.props';
import moment from 'moment';

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  delTask,
  setShowTaskModal,
}): JSX.Element => {
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
            <PriorityDefault />
          </div>
          <h4 className={styles.task_id}>#{task.id || ''}</h4>
        </div>

        <div className={styles.task_avatar}>
          <img src={human} alt="avatar" />
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
          {moment(task.createDate).format('MMMM DD')}
        </span>
      </div>

      <div className={styles.task__footer}>
        <div className={styles.footer_left}>
          <div className={styles.task_label}>Feature</div>
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
        </div>
      </div>
    </div>
  );
};
