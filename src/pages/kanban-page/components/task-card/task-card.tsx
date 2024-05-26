import React from 'react';
import { delTaskFromCol } from '../../store/kanban.slice';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchGetTaskInfo } from '../../store/kanban.thunk';
import { Flex, Typography, Avatar, Badge, Tag, Space } from 'antd';
import {
  getAvatarUrlOrHuman,
  getColorByPriority,
} from '../../../../utils/utils';
import { ITask } from './task-card.type';
import 'moment/locale/ru';
import { STask } from './task-card.styled';
import { CommentOutlined, FileTextOutlined } from '@ant-design/icons';

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
    <Badge.Ribbon
      color={getColorByPriority(task.priority)}
      style={{ display: task.priority ? 'block' : 'none' }}
      text={task.priority}
    >
      <STask
        onClick={() => getTaskInfo()}
        hoverable
        onDragStart={(e: any) => {
          e.dataTransfer.setData('task', JSON.stringify(task));
          setTimeout(() => {
            e.target.style.display = 'none';
            dispatch(delTaskFromCol(task));
          }, 0);
        }}
        draggable
        size={'small'}
        id={`${task.id}`}
      >
        <Space>
          <Typography.Text>#{task.id}</Typography.Text>
          {task.type && <Tag>{task.type}</Tag>}
        </Space>

        <Typography.Paragraph>{task.name || ''}</Typography.Paragraph>

        <Flex justify={'space-between'} align={'center'}>
          <Space>
            <Space>
              <CommentOutlined />
              <Typography.Text>1</Typography.Text>
            </Space>
            <Space>
              <FileTextOutlined />
              <Typography.Text>2</Typography.Text>
            </Space>
          </Space>

          <Avatar
            size={'small'}
            src={getAvatarUrlOrHuman(task.assignee?.userPic)}
          />
        </Flex>
      </STask>
    </Badge.Ribbon>
  );
};
