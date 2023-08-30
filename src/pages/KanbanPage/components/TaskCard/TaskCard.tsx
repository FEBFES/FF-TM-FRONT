import React, { useState } from 'react';
import styles from './TaskCard.module.css';
import { delTaskFromCol } from '../../store/kanban.slice';
import { useAppDispatch } from '../../../../hooks/redux';
import { AttachmentsIcon } from '../../../../assets/icons/TaskIcons';
import { fetchGetTaskInfo } from '../../store/kanban.thunk';
import moment from 'moment';
import { DotsIcon } from '../../../../assets/icons/UtilsIcons';
import { DropDown } from '../../../../ui/drop-down/drop-down';
import { TaskLabel } from '../../../../ui/TaskLabel/TaskLabel';
import { PriorityLabel } from '../../../../ui/PriorityLabel/PriorityLabel';
import i18n from 'i18next';
import { Avatar } from '../../../../ui/Avatar/Avatar';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { ITask } from './TaskCard.type';
import 'moment/locale/ru';
import { Text, Title } from '../../../../ui/typography';
import { Space } from '../../../../ui/Space/Space';

interface TaskCardProps {
  task: ITask;
  delTask: any;
  setShowTaskModal: (bool: boolean) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  delTask,
  setShowTaskModal,
}): JSX.Element => {
  const [showDD, setShowDD] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const getTaskInfo = () => {
    setShowTaskModal(true);
    dispatch(
      fetchGetTaskInfo({
        projId: task.projectId,
        colId: task.columnId,
        taskId: task.id,
      })
    );
  };

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
          <Space mx={'2xs'} />
          <Title
            // color: #989898; todo
            level={'h6'}
          >
            #{task.id || ''}
          </Title>
        </div>

        {task.assignee?.userPic && (
          <Avatar
            size={'s'}
            src={getAvatarUrlOrHuman(task.assignee?.userPic)}
          />
        )}
      </div>

      <div className={styles.task__main}>
        <Title
          hover={'underline'}
          cursor={'pointer'}
          level={'h6'}
          className={'ellipsis_text'}
          // color: var(--font-defautl); hover: underline
          onClick={getTaskInfo}
        >
          {task.name || ''}
        </Title>
        <Text>
          {/*todo Сделать авто смену локали и связать с i18n мб черзе хук */}
          {moment(task.createDate).locale('ru').format('MMM DD')}
        </Text>
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
              <Text
              // todo
              // className={styles.task_attachments_counter}
              >
                {task.filesCounter || ''}
              </Text>
              <AttachmentsIcon />
            </div>
          )}
          <div
            onClick={() => setShowDD(true)}
            className={styles.task_attachments}
          >
            <DropDown show={showDD} setShow={setShowDD}>
              <Text onClick={() => delTask(task.columnId, task.id)}>
                {i18n.t('utils.buttons.delete')}
              </Text>
            </DropDown>
            <DotsIcon w={12} />
          </div>
        </div>
      </div>
    </div>
  );
};
