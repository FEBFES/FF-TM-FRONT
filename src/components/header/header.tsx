import React from 'react';
import {
  Avatar,
  Breadcrumb,
  Badge,
  Flex,
  Layout,
  Space,
  Typography,
  Dropdown,
  MenuProps,
} from 'antd';
import { useLocation } from 'react-router-dom';

const headerStyle: React.CSSProperties = {
  height: 60,
  background: 'white',
};

const items = [
  {
    key: 'profile',
    label: 'Профиль',
  },
  {
    key: 'logout',
    label: 'Выйти',
  },
];

export const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Layout.Header style={headerStyle}>
      <Flex
        style={{ height: '100%' }}
        justify={'space-between'}
        align={'center'}
      >
        <div>
          <Breadcrumb items={[{ title: 'sample' }, { title: 'test' }]} />
          <Typography>Title</Typography>
        </div>

        <Flex align={'center'}>
          <Space>
            <Badge size={'small'} count={22}>
              <Avatar />
            </Badge>
            <Dropdown menu={{ items }}>
              <Typography>Bitaev Denis</Typography>
            </Dropdown>
          </Space>
        </Flex>
      </Flex>
    </Layout.Header>
  );
};
