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

interface SettingsPageProps {}

export const SettingsPage: React.FC<SettingsPageProps> = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <SettingsSidebar />

      <div className={styles.page__cont}>
        <div className={styles.pageWrap}>
          <Routes>
            {/* todo
              -Убрать из табов папки components и modules,
              -Перенести *Section из модулей в общую компоненту settingsPage
              -Перенести из таб > components  в setting
              sPage > components 
            */}
            <Route path={'/'} element={<SettingsGeneralTab />} />
            <Route path={'/profile'} element={<SettingsProfileTab />} />
            <Route path={'/project'} element={<SettingsProjectsTab />} />
            <Route path={'/members'} element={<SettingsMembersTab />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
