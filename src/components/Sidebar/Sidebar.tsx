import React from 'react';
import styles from './Sidebar.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  LeaveIcon,
  ProjectsIcon,
  SettingsIcon,
} from '../../assets/icons/SidebarIcons';
import { useAppDispatch } from '../../hooks/redux';
import { useTheme } from '../../hooks/useTheme';
import { LogoIconDark } from '../../assets/icons/LogoIconDark';
import { LogoIconLight } from '../../assets/icons/LogoIconLight';
import { setIsAuth } from '../../pages/AuthPages/store/auth.slice';
import { appRoutsPath } from '../../routing/routs';
import i18n from 'i18next';

const links = [
  //TODO to - from string to const appRoutsPath
  {
    title: 'routes.sidebar.projects',
    icon: HomeIcon,
    to: '/',
    private: false,
  },
  {
    title: 'routes.sidebar.kanban',
    icon: ProjectsIcon,
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
    icon: SettingsIcon,
    to: '/SettingsPage/',
    private: false,
  },
];

export const Sidebar: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        {theme === 'dark' ? <LogoIconDark /> : <LogoIconLight />}
      </div>

      <ul className={styles.sidebar__main}>
        {links.map((link, i) => {
          if (link.private && location.pathname === '/') {
            return null;
          }
          return (
            <NavLink
              key={i}
              aria-label={link.title}
              className={({ isActive }) =>
                isActive ? `${styles.linkActive}` : `${styles.link}`
              }
              to={link.to}
            >
              <link.icon />
              <span className={styles.link__text}>
                {i18n.t(link.title) || ''}
              </span>
            </NavLink>
          );
        })}
      </ul>

      <footer className={styles.sidebar__footer}>
        <NavLink
          onClick={() => {
            dispatch(setIsAuth(false));
          }}
          aria-label={'Logout'}
          className={styles.link}
          to={appRoutsPath.LoginPage.to}
          replace={true}
        >
          <LeaveIcon />
        </NavLink>
      </footer>
    </div>
  );
};
