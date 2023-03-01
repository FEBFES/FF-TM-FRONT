import React from 'react';
import styles from './MainLayoutSidebar.module.css';
import { NavLink } from 'react-router-dom';
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
    to: '/KanbanPage/:id',
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
    to: '/SettingsPage',
  },
];

export const MainLayoutSidebar: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { theme } = useTheme();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        {theme === 'dark' ? <LogoIconDark /> : <LogoIconLight />}
      </div>

      <ul className={styles.sidebar__main}>
        {links.map((link, i) => {
          return (
            <NavLink
              key={i}
              className={({ isActive }) =>
                isActive ? `${styles.linkActive}` : `${styles.link}`
              }
              to={link.to}
            >
              <link.icon />
            </NavLink>
          );
        })}
      </ul>

      <footer className={styles.sidebar__footer}>
        <NavLink
          onClick={() => {
            dispatch(setIsAuth(false));
          }}
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
