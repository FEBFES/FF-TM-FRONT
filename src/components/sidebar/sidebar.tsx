import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { useTheme } from '../../hooks/useTheme';
import { LogoIconDark } from '../../assets/icons/LogoIconDark';
import { LogoIconLight } from '../../assets/icons/LogoIconLight';
import { setIsAuth } from '../../pages/auth-pages/store/auth.slice';
import { appRoutsPath } from '../../routing/routs';
import i18n from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faCog,
  faBorderAll,
  faDoorOpen,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { setSidebarView } from '../../pages/root/store/app-slice';
import { Space } from '../../ui/Space/Space';
import { Title } from '../../ui/Typography';
import { isMobile } from 'react-device-detect';
import {
  SSidebar,
  SSidebarFooter,
  SSidebarHeader,
  SSidebarMain,
  SLink,
  SSidebarToggle,
} from './sidebar.styled';

const links = [
  //TODO to - from string to const appRoutsPath
  {
    title: 'routes.sidebar.projects',
    icon: faHouse,
    to: '/ProjectsPage',
    private: false,
  },
  {
    title: 'routes.sidebar.kanban',
    icon: faBorderAll,
    to: '/KanbanPage',
    private: false,
  },
  // {
  //   title:  i18n.t(''),
  //   icon: TimeLineIcon,
  //   to: '/Timeline',
  //   private: true,
  // },
  // {
  //   title: i18n.t(''),
  //   icon: ChatIcon,
  //   to: '/Messages',
  //   private: true,
  // },
  {
    title: 'routes.sidebar.settings',
    icon: faCog,
    to: '/SettingsPage/',
    private: false,
  },
];

export const Sidebar: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { theme } = useTheme();
  const location = useLocation();
  const isFullView = useTypedSelector((state) => state.app.sidebarFullView);
  const curProjId = useTypedSelector((state) => state.curProj.projId);

  useLayoutEffect(() => {
    document.documentElement.style.setProperty(
      '--sideBarWidth',
      !isMobile ? '170px' : '60px'
    );
  }, []);

  return (
    <SSidebar>
      <SSidebarHeader>
        {theme === 'dark' ? <LogoIconDark /> : <LogoIconLight />}
      </SSidebarHeader>

      {!isMobile && (
        <SSidebarToggle
          onClick={() => {
            dispatch(setSidebarView(!isFullView));
          }}
          isFull={isFullView}
        >
          <FontAwesomeIcon size={'xs'} icon={faChevronRight} />
        </SSidebarToggle>
      )}

      <SSidebarMain>
        {links.map((link, i) => {
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
              <Space mx={'xs'} />
              {isFullView && (
                <Title level={'h6'}>{i18n.t(link.title) || ''}</Title>
              )}
            </SLink>
          );
        })}
      </SSidebarMain>
      <SSidebarFooter>
        <SLink
          onClick={() => {
            dispatch(setIsAuth(false));
          }}
          aria-label={'Logout'}
          to={appRoutsPath.LoginPage.to}
          replace={true}
        >
          <FontAwesomeIcon icon={faDoorOpen} />
        </SLink>
      </SSidebarFooter>
    </SSidebar>
  );
};
