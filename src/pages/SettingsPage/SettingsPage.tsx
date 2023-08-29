import React from 'react';
import styles from './SettingsPage.module.css';
import { Routes, Route } from 'react-router-dom';
import { SettingsSidebar } from './components/SettingsSidebar/SettingsSidebar';
import {
  SettingsProfileTab,
  SettingsProjectsTab,
  SettingsMembersTab,
  SettingsGeneralTab,
} from './modules';
import { SPage } from './SettingsPage.styled';

interface SettingsPageProps {}

export const SettingsPage: React.FC<SettingsPageProps> = (): JSX.Element => {
  return (
    <SPage>
      <SettingsSidebar />

      <div className={styles.page__cont}>
        <div className={styles.pageWrap}>
          <Routes>
            <Route path={'/'} element={<SettingsGeneralTab />} />
            <Route path={'/profile'} element={<SettingsProfileTab />} />
            <Route path={'/project'} element={<SettingsProjectsTab />} />
            <Route path={'/members'} element={<SettingsMembersTab />} />
          </Routes>
        </div>
      </div>
    </SPage>
  );
};
