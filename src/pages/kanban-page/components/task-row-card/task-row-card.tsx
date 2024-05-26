import React from 'react';
import { ITask } from '../task-card/task-card.type';
import { fetchGetTaskInfo } from '../../store/kanban.thunk';
import { useAppDispatch } from '../../../../hooks/redux';
import {
  getAvatarUrlOrHuman,
  getColorByPriority,
} from '../../../../utils/utils';
import { Typography, Badge, Avatar, Card, Space, Flex } from 'antd';
import moment from 'moment';

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
  const dispatch = useAppDispatch();

  const getInfoTask = () => {
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
      <Card
        onClick={getInfoTask}
        size={'small'}
        style={{ marginBottom: '8px' }}
      >
        <Flex align={'center'} justify={'space-between'}>
          <Flex vertical>
            <Typography>{task.name}</Typography>

            <Space>
              <Typography>#{task.id}</Typography>
              <Typography>
                от {moment(task.createDate).format('DD.MM.YYYY, HH:MM')}
              </Typography>
            </Space>
          </Flex>

          <Avatar src={getAvatarUrlOrHuman(task.owner.userPic)} />
        </Flex>
      </Card>
    </Badge.Ribbon>
  );
};
