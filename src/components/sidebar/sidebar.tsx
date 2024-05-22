import React, { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { useTheme } from '../../hooks/use-theme';
import { LogoIconDark } from '../../assets/icons/LogoIconDark';
import { LogoIconLight } from '../../assets/icons/LogoIconLight';
import { setIsAuth } from '../../pages/auth-pages/store/auth.slice';
import { appRoutsPath } from '../../routing/routs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faCog,
  faBorderAll,
  faDoorOpen,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { setSidebarView } from '../../pages/root/store/app-slice';
import { Space, Typography, Menu, Layout } from 'antd';
import { isMobile } from 'react-device-detect';
import {
  SSidebar,
  SSidebarFooter,
  SSidebarHeader,
  SSidebarMain,
  SLink,
  SSidebarToggle,
} from './sidebar.styled';
import type { GetProp, MenuProps } from 'antd';
import i18next from 'i18next';
import { SettingOutlined } from '@ant-design/icons';

const { Sider } = Layout;

type MenuItem = GetProp<MenuProps, 'items'>[number];

const links: MenuItem[] = [
  //TODO to - from string to const appRoutsPath
  {
    key: '/ProjectsPage',
    label: 'Проекты',
  },
  {
    key: '/KanbanPage',
    label: 'Доска',
  },
  {
    key: '/Timeline',
    label: 'Таймлайн'
  },
  {
    key: '/Messages',
    label: 'Сообщения',
  },
  {
    key: '/SettingsPage',
    label: 'настройки',
    icon: <SettingOutlined />,
    children: [
      { key: '/SettingsPage/', label: 'Общее' },
      { key: '/SettingsPage/profile', label: 'Профиль' },
      { key: '/SettingsPage/project', label: 'Проект' },
      { key: '/SettingsPage/members', label: 'Участники' },
    ],
  },
];

export const Sidebar: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isFullView = useTypedSelector((state) => state.app.sidebarFullView);
  const curProjId = useTypedSelector((state) => state.curProj.projId);

  const onMenuItemClick = (link: string): void => {
    navigate(link);
  };

  return (
    <Sider width="250px" collapsible theme="light">
      {theme === 'light' ? <LogoIconDark /> : <LogoIconLight />}

      <Menu
        mode="inline"
        items={links}
        defaultSelectedKeys={[location.pathname]}
        onClick={(e) => {
          onMenuItemClick(e.key);
        }}
      />
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
    </Sider>
  );
};
