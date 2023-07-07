import React from 'react';
import styles from './SettingsSidebar.module.css';
import { NavLink } from 'react-router-dom';
import i18n from 'i18next';

interface SettingsSidebarProps {}

export const SettingsSidebar: React.FC<
  SettingsSidebarProps
> = (): JSX.Element => {
  return (
    <nav className={styles.sidebar}>
      <h1 className={styles.sidebar__title}>
        {i18n.t('pages.settings.sidebar.title')}
      </h1>

      {/*<h2 className={styles.sidebar__subtitle}>Workspace</h2>*/}
      {/*<li className={styles.sidebar__link}>*/}
      {/*  <NavLink*/}
      {/*    className={({ isActive }) =>*/}
      {/*      isActive*/}
      {/*        ? `${styles.sidebar__link_active}`*/}
      {/*        : `${styles.sidebar__link_item}`*/}
      {/*    }*/}
      {/*    to={'/SettingsPage/'}*/}
      {/*  >*/}
      {/*    General*/}
      {/*  </NavLink>*/}
      {/*</li>*/}
      {/*<li className={styles.sidebar__link}>*/}
      {/*  <NavLink*/}
      {/*    className={({ isActive }) =>*/}
      {/*      isActive*/}
      {/*        ? `${styles.sidebar__link_active}`*/}
      {/*        : `${styles.sidebar__link_item}`*/}
      {/*    }*/}
      {/*    to={'/SettingsPage/members'}*/}
      {/*  >*/}
      {/*    Members*/}
      {/*  </NavLink>*/}
      {/*</li>*/}

      {/* todo i18next */}
      <h2 className={styles.sidebar__subtitle}>
        {i18n.t('pages.settings.sidebar.link.title')}
      </h2>
      <li className={styles.sidebar__link}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.sidebar__link_active}`
              : `${styles.sidebar__link_item}`
          }
          // to={'/SettingsPage/profile'}
          //todo i18next
          to={'/SettingsPage/'}
        >
          {i18n.t('pages.settings.sidebar.link.profile')}
        </NavLink>
      </li>
      <li className={styles.sidebar__link}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.sidebar__link_active}`
              : `${styles.sidebar__link_item}`
          }
          to={'/SettingsPage/project'}
        >
          {i18n.t('pages.settings.sidebar.link.project')}
        </NavLink>
      </li>
    </nav>
  );
};
