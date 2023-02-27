import React from 'react';
import styles from './MainLayoutSidebar.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { setIsAuth } from '../../pages/AuthPages/store/auth.slice';
import {
  ChatIcon,
  HomeIcon,
  LeaveIcon,
  ProjectsIcon,
  SettingsIcon,
  TimeLineIcon,
} from '../../assets/icons/SidebarIcons';
import { useTheme } from '../../hooks/useTheme';
import { LogoIconLight } from '../../assets/icons/LogoIconLight';
import { LogoIconDark } from '../../assets/icons/LogoIconDark';
import { appRoutsPath } from '../../routing/routs';

const links = [
  //TODO to - from string to const appRoutsPath
  {
    title: 'Home',
    icon: HomeIcon,
    to: '/',
  },
  {
    title: 'Projects',
    icon: ProjectsIcon,
    to: '/KanbanPage/',
  },
  {
    title: 'Timeline',
    icon: TimeLineIcon,
    to: '/timeline',
  },
  {
    title: 'Chat',
    icon: ChatIcon,
    to: '/chat',
  },
  {
    title: 'Settings',
    icon: SettingsIcon,
    to: '/settings',
  },
];

export const MainLayoutSidebar: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { theme } = useTheme();
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        {theme === 'dark' ? <LogoIconDark /> : <LogoIconLight />}
      </div>

      <ul className={styles.sidebar__main}>
        {links.map((link, i) => {
          return (
            <Link
              key={i}
              className={`${styles.link} ${
                link.to === location.pathname && styles.linkActive
              }`}
              to={link.to}
            >
              <link.icon />
            </Link>
          );
        })}
      </ul>

      <footer className={styles.sidebar__footer}>
        <Link
          onClick={() => {
            dispatch(setIsAuth(false));
          }}
          className={styles.link}
          to={appRoutsPath.LoginPage.to}
          replace={true}
        >
          <LeaveIcon />
        </Link>
      </footer>
    </div>
  );
};
