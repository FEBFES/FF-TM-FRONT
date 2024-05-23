import React, { useState } from 'react';
import { delTaskFromCol } from '../../store/kanban.slice';
import { useAppDispatch } from '../../../../hooks/redux';
import { AttachmentsIcon } from '../../../../assets/icons/TaskIcons';
import { fetchGetTaskInfo } from '../../store/kanban.thunk';
import moment from 'moment';
import { DotsIcon } from '../../../../assets/icons/UtilsIcons';
import {Flex, Typography, Avatar, Dropdown, Badge, Tag} from 'antd';
import i18n from 'i18next';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { ITask } from './task-card.type';
import 'moment/locale/ru';
import {
  STaskMain,
  STask,
} from './task-card.styled';
import {CommentOutlined, FileTextOutlined} from "@ant-design/icons";

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
    <Badge.Ribbon style={{display: task.priority ? 'block' : 'none'}} text={task.priority}>
      <STask
          hoverable
          onDragStart={(e: any) => {
            e.dataTransfer.setData('task', JSON.stringify(task));
            setTimeout(() => {
              e.target.style.display = 'none';
              dispatch(delTaskFromCol(task));
            }, 0);
          }}
          draggable
          id={`${task.id}`}
      >
        <Flex>
            <Typography>
              #{task.id || ''}
            </Typography>

          {task.assignee?.userPic && (
              <Avatar src={getAvatarUrlOrHuman(task.assignee?.userPic)} />
          )}
        </Flex>

        <STaskMain>
          <Typography.Title level={5} ellipsis className={'ellipsis_text'} onClick={getTaskInfo}>
            {task.name || ''}
          </Typography.Title>
          <Typography>
            {moment(task.createDate).locale('ru').format('MMM DD')}
          </Typography>
        </STaskMain>

        <>
          <Flex>
            <Tag>{task.type}</Tag>
          </Flex>

          <Flex>
            {/*<div className={styles.task_attachments}>*/}
            {/*  <span className={styles.task_attachments_counter}>8</span>*/}
            {/*  <CommentsIcon />*/}
            {/*</div>*/}
            <CommentOutlined />
            <FileTextOutlined />
            {task.filesCounter !== 0 && (
                <div>
                  <Typography>{task.filesCounter || ''}</Typography>
                  <AttachmentsIcon />
                </div>
            )}
            <div onClick={() => setShowDD(true)}>
              <Dropdown
                  // open={showDD}
                  // setShow={setShowDD}
              >
                <Typography onClick={() => delTask(task.columnId, task.id)}>
                  {i18n.t('utils.buttons.delete')}
                </Typography>
              </Dropdown>
              <DotsIcon w={12} />
            </div>
          </Flex>
        </>
      </STask>
    </Badge.Ribbon>
  );
};
