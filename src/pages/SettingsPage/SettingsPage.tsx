import React from 'react';
import styles from './SettingsPage.module.css';
import { Routes, Route } from 'react-router-dom';
import { SettingsSidebar } from './components/SettingsSidebar/SettingsSidebar';
import {
  SettingsProfileTab,
  SettingsProjectsTab,
  SettingsMembersTab,
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
              -Перенести из таб > components  в settingsPage > components 
            */}
            <Route path={'/'} element={<SettingsProfileTab />} />
            <Route path={'/project'} element={<SettingsProjectsTab />} />
            <Route path={'/members'} element={<SettingsMembersTab />} />
            {/*<Route path={'/'} element={<SettingsGeneralTab />} />*/}
          </Routes>
        </div>
      </div>
    </div>
  );
};
