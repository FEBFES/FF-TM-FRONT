import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { useTheme } from '../../hooks/useTheme';
import { LogoIconDark } from '../../assets/icons/LogoIconDark';
import { LogoIconLight } from '../../assets/icons/LogoIconLight';
import { setIsAuth } from '../../pages/AuthPages/store/auth.slice';
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
import classNames from 'classnames';

const links = [
  //TODO to - from string to const appRoutsPath
  {
    title: 'routes.sidebar.projects',
    icon: faHouse,
    to: '/',
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
  const [isFullView, setIsFullView] = useState<boolean>(true);

  return (
    <div className={classNames(styles.sidebar)}>
      <div className={styles.sidebar__header}>
        {theme === 'dark' ? <LogoIconDark /> : <LogoIconLight />}
      </div>

      <div
        onClick={() => {
          setIsFullView(!isFullView);
          document.documentElement.style.setProperty(
            '--sideBarWidth',
            isFullView ? '60px' : '170px'
          );
        }}
        className={classNames(styles.sidebar__toggle, {
          [styles.sidebar__toggle_full]: isFullView,
        })}
      >
        <FontAwesomeIcon size={'xs'} icon={faChevronRight} />
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
                isActive
                  ? `${styles.linkActive} ${styles.link}`
                  : `${styles.link}`
              }
              to={link.to}
            >
              <FontAwesomeIcon icon={link.icon} />
              {isFullView && (
                <span className={styles.link__text}>
                  {i18n.t(link.title) || ''}
                </span>
              )}
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
          <FontAwesomeIcon icon={faDoorOpen} />
        </NavLink>
      </footer>
    </div>
  );
};
