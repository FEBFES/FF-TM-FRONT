import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogoIconDark } from '../../assets/icons/LogoIconDark';
import { Menu, Layout, Flex, Grid } from 'antd';
import type { GetProp, MenuProps } from 'antd';
import {
  BarChartOutlined,
  FolderOpenOutlined,
  MessageOutlined,
  SettingOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { MenuCont } from './sidebar.styled';

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
  },
  {
    key: '/Messages',
    label: 'Сообщения',
    icon: <MessageOutlined />,
  },
  {
    key: '/Settings',
    label: 'настройки',
    icon: <SettingOutlined />,
    children: [
      { key: '/Settings/Profile', label: 'Профиль' },
      { key: '/Settings/Project', label: 'Проект' },
      { key: '/Settings/Members', label: 'Участники' },
    ],
  },
];

export const Sidebar: React.FC = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const { useBreakpoint } = Grid;

  const onMenuItemClick = (link: string): void => {
    navigate(link);
  };

  return (
    <Layout.Sider
      theme={'dark'}
      breakpoint="md"
      width="200px"
      collapsible={useBreakpoint().md}
    >
      <Flex style={{ marginTop: '40px' }} justify={'center'} align={'center'}>
        <LogoIconDark />
      </Flex>

      <MenuCont>
        <Menu
          theme={'dark'}
          mode="inline"
          items={links}
          defaultSelectedKeys={[location.pathname]}
          onClick={(e) => {
            onMenuItemClick(e.key);
          }}
        />
      </MenuCont>

      {/* {links.map((link, i) => {
          if (link.private && location.pathname === '/') {
            return null;
          }
          if (link.title === 'routes.sidebar.kanban' && !curProjId) {
            return null;
          }
          return (
            <SLink
              key={i}
              aria-label={link.title}
              isActive={location.pathname.includes(link.to)}
              to={link.to}
            >
              <FontAwesomeIcon icon={link.icon} />
              <Space />
              {isFullView && (
                <Typography>{i18n.t(link.title) || ''}</Typography>
              )}
            </SLink>
          );
        })} */}

      {/* //todo */}
      {/* <SLink
        onClick={() => {
          dispatch(setIsAuth(false));
        }}
        aria-label={'Logout'}
        to={appRoutsPath.LoginPage.to}
        replace={true}
      >
        <FontAwesomeIcon icon={faDoorOpen} />
      </SLink> */}
    </Layout.Sider>
  );
};
