import React, { useState } from 'react';
import {
  Drawer,
  Flex,
  Typography,
  Grid,
  Space,
  Tooltip,
  Avatar,
  Tag,
  Input,
  Tabs,
} from 'antd';
import { useTypedSelector } from '../../../../hooks/redux';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import moment from 'moment';
import { AppleOutlined, CalculatorOutlined } from '@ant-design/icons';
import { FilesTab } from '../../components';
const { useBreakpoint } = Grid;

interface ITaskDrawerProps {
  showTaskModal: boolean;
  setShowTaskModal: (bool: boolean) => void;
}

export const TaskDrawer: React.FC<ITaskDrawerProps> = ({
  showTaskModal,
  setShowTaskModal,
}) => {
  const [isLoading] = useState<boolean>(false);
  const screens = useBreakpoint();
  const task = useTypedSelector((state) => state.curProj.taskWindowInfo);

  return (
    <Drawer
      width={screens.xs ? '100%' : 378}
      closable
      destroyOnClose
      title={task?.id || ''}
      placement="right"
      open={showTaskModal}
      loading={isLoading}
      onClose={() => setShowTaskModal(false)}
    >
      <Flex vertical>
        <Typography.Title level={5}>{task?.name || ''}</Typography.Title>

        <Flex>
          <Space>
            <Typography>Cоздатель:</Typography>
            <Space />
            <Tooltip title={task?.owner?.username || ''}>
              <Avatar src={getAvatarUrlOrHuman(task?.owner?.userPic || '')} />
            </Tooltip>
          </Space>

          <Space>
            <Typography>Ответственный:</Typography>

            <Avatar
              src={getAvatarUrlOrHuman(task?.assignee?.userPic || '')}
              alt={'human'}
            />
          </Space>
        </Flex>

        <Flex justify={'space-between'}>
          <Space>
            <Typography>Приоритет:</Typography>
            <Tag>{task?.priority || 'Нету'}</Tag>
          </Space>

          <Space>
            <Typography>Тип:</Typography>
            <Tag>{task?.type || 'Нету'}</Tag>
          </Space>
        </Flex>

        <Flex justify={'space-between'}>
          <Space>
            <Typography>Создан:</Typography>
            <Typography>
              {moment(task?.createDate).format('DD.MM.YYYY')}
            </Typography>
          </Space>

          <Space>
            <Typography>Изменен:</Typography>
            <Typography>
              {moment(task?.updateDate).format('DD.MM.YYYY')}
            </Typography>
          </Space>
        </Flex>

        <Flex vertical>
          <Typography>Описание:</Typography>
          <Input.TextArea
            value={task?.description || ''}
            rows={4}
            autoSize={{ minRows: 3, maxRows: 5 }}
            readOnly
          />
        </Flex>

        <Tabs
          defaultActiveKey="2"
          type={'card'}
          items={[
            {
              key: 'files',
              label: 'Файлы',
              icon: <AppleOutlined />,
            },
            {
              key: 'messages',
              label: 'Сообщения',
              icon: <CalculatorOutlined />,
            },
          ]}
        />

        <FilesTab files={[]} setFiles={() => {}} />
      </Flex>
    </Drawer>
  );
};
