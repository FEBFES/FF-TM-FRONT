import React from 'react';
import styles from './SettingsSidebar.module.css';
import { NavLink } from 'react-router-dom';

interface SettingsSidebarProps {}

export const SettingsSidebar: React.FC<
  SettingsSidebarProps
> = (): JSX.Element => {
  return (
    <nav className={styles.sidebar}>
      <h1 className={styles.sidebar__title}>Settings</h1>

      <h2 className={styles.sidebar__subtitle}>Workspace</h2>
      <li className={styles.sidebar__link}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.sidebar__link_active}`
              : `${styles.sidebar__link_item}`
          }
          to={'/SettingsPage/'}
        >
          General
        </NavLink>
      </li>
      <li className={styles.sidebar__link}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.sidebar__link_active}`
              : `${styles.sidebar__link_item}`
          }
          to={'/SettingsPage/members'}
        >
          Members
        </NavLink>
      </li>

      <h2 className={styles.sidebar__subtitle}>Account</h2>
      <li className={styles.sidebar__link}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.sidebar__link_active}`
              : `${styles.sidebar__link_item}`
          }
          to={'/SettingsPage/profile'}
        >
          Profile
        </NavLink>
      </li>
    </nav>
  );
};
