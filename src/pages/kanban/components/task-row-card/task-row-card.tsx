import React from 'react';
import { ITask } from '../task-card/task-card.type';
import { fetchGetTaskInfo } from '../../../../__data__/middleware/kanban.thunk';
import { useAppDispatch } from '../../../../hooks/redux';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { Typography, Avatar, Card, Space, Flex } from 'antd';
import moment from 'moment';
import { Priority } from '../priority/priority';

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
    <Card onClick={getInfoTask} size={'small'} style={{ marginBottom: '8px' }}>
      <Flex align={'center'} justify={'space-between'}>
        <Flex vertical>
          <Flex>
            <Space>
              <Priority priority={task.priority} />
              <Typography>{task.name}</Typography>
            </Space>
          </Flex>

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
  );
};
