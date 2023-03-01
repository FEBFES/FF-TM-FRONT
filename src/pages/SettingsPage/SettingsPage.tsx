import React from 'react';
import styles from './SettingsPage.module.css';
import { Routes, Route } from 'react-router-dom';
import { SettingsSidebar } from './modules/SettingsSidebar/SettingsSidebar';
import { GeneralTab } from './modules/GeneralTab/GeneralTab';
import { ProfileTab } from './modules/ProfileTab/ProfileTab';
import { MembersTab } from './modules/MembersTab/MembersTab';

interface SettingsPageProps {}

export const SettingsPage: React.FC<SettingsPageProps> = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <SettingsSidebar />

      <div className={styles.page__cont}>
        <div className={styles.pageWrap}>
          <Routes>
            <Route path={'/'} element={<GeneralTab />} />
            <Route path={'/members'} element={<MembersTab />} />
            <Route path={'/profile'} element={<ProfileTab />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
