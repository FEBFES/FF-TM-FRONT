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
  Upload,
  Image,
} from 'antd';
import { useTypedSelector } from '../../../../hooks/redux';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import moment from 'moment';
import {
  AppleOutlined,
  CalculatorOutlined,
  InboxOutlined,
} from '@ant-design/icons';
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
  // const task = useTypedSelector((state) => state.curProj.taskWindowInfo);

  return (
    <Drawer
      width={screens.xs ? '100%' : 378}
      closable
      destroyOnClose
      // title={task?.id || ''}
      placement="right"
      open={showTaskModal}
      loading={isLoading}
      onClose={() => setShowTaskModal(false)}
    >
      <Flex vertical>
        {/* <Typography.Title level={5}>{task?.name || ''}</Typography.Title> */}

        <Flex>
          <Space>
            <Typography>Cоздатель:</Typography>

            {/* <Tooltip title={task?.owner?.username || ''}>
              <Avatar src={getAvatarUrlOrHuman(task?.owner?.userPic || '')} />
            </Tooltip> */}
          </Space>

          <Space>
            <Typography>Ответственный:</Typography>

            {/* <Avatar
              src={getAvatarUrlOrHuman(task?.assignee?.userPic || '')}
              alt={'human'}
            /> */}
          </Space>
        </Flex>

        <Flex justify={'space-between'}>
          <Space>
            <Typography>Приоритет:</Typography>

            {/* <Tag>{task?.priority || 'Нету'}</Tag> */}
          </Space>

          <Space>
            <Typography>Тип:</Typography>

            {/* <Tag>{task?.type || 'Нету'}</Tag> */}
          </Space>
        </Flex>

        <Flex justify={'space-between'}>
          <Space>
            <Typography>Создан:</Typography>

            <Typography>
              {/* {moment(task?.createDate).format('DD.MM.YYYY')} */}
            </Typography>
          </Space>

          <Space>
            <Typography>Изменен:</Typography>

            <Typography>
              {/* {moment(task?.updateDate).format('DD.MM.YYYY')} */}
            </Typography>
          </Space>
        </Flex>

        <Flex vertical>
          <Typography>Описание:</Typography>
          <Input.TextArea
            // value={task?.description || ''}
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

        <div
          style={{
            width: '100%',
            overflowX: 'scroll',
          }}
        >
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            <Flex
              style={{
                overflowX: 'scroll',
                boxShadow: 'rgb(0 0 0 / 74%) 0px 2px 8px 0px',
              }}
            >
              {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((el) => {
                return (
                  <div style={{ marginRight: '20px', padding: '20px 10px' }}>
                    <Image
                      width={60}
                      src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    />
                  </div>
                );
              })}
            </Flex>
          </Image.PreviewGroup>
        </div>

        <Upload.Dragger>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Нажмите или перетащите файл в эту область для загрузки
          </p>
          <p className="ant-upload-hint">
            Поддерживается однократная или массовая загрузка файлов в формате -
            'jpeg, png'
          </p>
        </Upload.Dragger>
      </Flex>
    </Drawer>
  );
};
