import React from 'react';
import styles from './SettingsSidebar.module.css';
import { NavLink } from 'react-router-dom';
import i18n from 'i18next';
import { useTypedSelector } from '../../../../hooks/redux';
import { Title } from '../../../../ui/Typography';
import { Space } from '../../../../ui/Space/Space';

interface SettingsSidebarProps {}

export const SettingsSidebar: React.FC<
  SettingsSidebarProps
> = (): JSX.Element => {
  const curProj = useTypedSelector((state) => state.curProj.projId);

  return (
    <nav className={styles.sidebar}>
      <Title level={'h2'}>{i18n.t('pages.settings.sidebar.title')}</Title>
      <Space my={'xl'} />
      {/*<Title */}
      {/*    //todo*/}
      {/*    // className={styles.sidebar__subtitle}*/}
      {/*>Workspace</Title>*/}
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

      <Title level={'h4'}>{i18n.t('pages.settings.sidebar.link.title')}</Title>
      <li className={styles.sidebar__link}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.sidebar__link_active}`
              : `${styles.sidebar__link_item}`
          }
          to={'/SettingsPage/'}
        >
          {i18n.t('pages.settings.sidebar.link.profile')}
        </NavLink>
      </li>
      {curProj && (
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
      )}
    </nav>
  );
};
