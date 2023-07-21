import React from 'react';
import styles from './SettingsSidebar.module.css';
import { NavLink } from 'react-router-dom';
import i18n from 'i18next';
import { useTypedSelector } from '../../../../hooks/redux';
import { Title } from '../../../../ui/Typography';
import { Space } from '../../../../ui/Space/Space';

interface SettingsSidebarProps {}

const sidebarLinks = [
  {
    title: 'pages.settings.sidebar.link.title',
    needCurProjInfo: false,
    children: [
      {
        subtitle: 'pages.settings.sidebar.link.profile',
        to: '/SettingsPage/',
        needCurProjInfo: false,
      },
    ],
  },
  {
    title: 'pages.settings.tabs.project.title',
    needCurProjInfo: false,
    children: [
      {
        subtitle: 'pages.settings.sidebar.link.project',
        to: '/SettingsPage/project',
        needCurProjInfo: true,
      },
      {
        subtitle: 'pages.settings.sidebar.link.members',
        to: '/SettingsPage/members',
        needCurProjInfo: true,
      },
    ],
  },
];

export const SettingsSidebar: React.FC<
  SettingsSidebarProps
> = (): JSX.Element => {
  const curProj = useTypedSelector((state) => state.curProj.projId);

  return (
    <nav className={styles.sidebar}>
      <Title level={'h2'}>{i18n.t('pages.settings.sidebar.title')}</Title>
      <Space my={'xl'} />

      {sidebarLinks.map((link, i) => {
        if (link.needCurProjInfo && !curProj) return null;
        return (
          <div key={i} className={styles.linkCont}>
            <Title level={'h4'}>{i18n.t(link.title)}</Title>
            <div className={styles.sublinkCont}>
              {link.children.map((subLink, index) => {
                if (link.needCurProjInfo && !curProj) return null;
                return (
                  <NavLink
                    key={index}
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.sidebar__link_active}`
                        : `${styles.sidebar__link_item}`
                    }
                    to={subLink.to}
                  >
                    {i18n.t(subLink.subtitle)}
                  </NavLink>
                );
              })}
            </div>
          </div>
        );
      })}
    </nav>
  );
};
