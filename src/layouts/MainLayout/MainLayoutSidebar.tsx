import React from 'react';
import styles from './MainLayoutSidebar.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { setIsAuth } from '../../pages/AuthPages/store/auth.slice';
import {
  LeaveIcon,
  NotificationIcon,
  ProjectsIcon,
  SettingsIcon,
  TeamIcon,
  TimeLineIcon,
} from '../../assets/icons/SidebarIcons';
import { useTheme } from '../../hooks/useTheme';
import { LogoIconLight } from '../../assets/icons/LogoIconLight';
import { LogoIconDark } from '../../assets/icons/LogoIconDark';

const links = [
  {
    title: 'Projects',
    icon: ProjectsIcon,
    to: '/Projects',
  },
  {
    title: 'Timeline',
    icon: TimeLineIcon,
    to: '/timeline',
  },
  {
    title: 'Team',
    icon: TeamIcon,
    to: '/team',
  },
  {
    title: 'Notifications',
    icon: NotificationIcon,
    to: '/notifications',
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
          onClick={() => dispatch(setIsAuth(false))}
          className={styles.link}
          to={'/Login'}
        >
          <LeaveIcon />
        </Link>
      </footer>
    </div>
  );
};
