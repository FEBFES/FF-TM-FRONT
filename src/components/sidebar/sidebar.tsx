import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogoIconDark } from '../../assets/icons/LogoIconDark';
import { Menu, Layout, Flex } from 'antd';
import type { GetProp, MenuProps } from 'antd';
import {
  BarChartOutlined,
  FolderOpenOutlined,
  MessageOutlined,
  SettingOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { MenuCont } from './sidebar.styled';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';

type MenuItem = GetProp<MenuProps, 'items'>[number];

const links: MenuItem[] = [
  //TODO to - from string to const appRoutsPath
  {
    key: '/Projects',
    label: 'Проекты',
    icon: <FolderOpenOutlined />,
  },
  {
    key: '/Kanban',
    label: 'Доска',
    icon: <UnorderedListOutlined />,
  },
  {
    key: '/Timeline',
    label: 'Таймлайн',
    icon: <BarChartOutlined />,
    disabled: true,
  },
  {
    key: '/Messages',
    label: 'Сообщения',
    icon: <MessageOutlined />,
    disabled: true,
  },
  {
    key: '/Settings',
    label: 'настройки',
    icon: <SettingOutlined />,
  },
];

export const Sidebar: React.FC = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const onMenuItemClick = (link: string): void => {
    navigate(link);
  };

  return (
    <Layout.Sider
      theme={'light'}
      breakpoint="lg"
      width="200px"
      collapsible={useBreakpoint().lg}
    >
      <Flex style={{ marginTop: '40px' }} justify={'center'} align={'center'}>
        <LogoIconDark />
      </Flex>

      <MenuCont>
        <Menu
          style={{ borderRight: 'none' }}
          theme={'light'}
          mode="inline"
          items={links}
          defaultSelectedKeys={[location.pathname]}
          onClick={(e) => {
            onMenuItemClick(e.key);
          }}
        />
      </MenuCont>
    </Layout.Sider>
  );
};
