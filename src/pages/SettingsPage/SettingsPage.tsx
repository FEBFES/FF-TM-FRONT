import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SettingsSidebar } from './components/SettingsSidebar/SettingsSidebar';
import {
  SettingsProfileTab,
  SettingsProjectsTab,
  SettingsMembersTab,
  SettingsGeneralTab,
} from './modules';
import { SPage, SPageCont, SPageWrap } from './SettingsPage.styled';

interface SettingsPageProps {}

export const SettingsPage: React.FC<SettingsPageProps> = (): JSX.Element => {
  return (
    <SPage>
      <SettingsSidebar />

      <SPageCont>
        <SPageWrap>
          <Routes>
            <Route path={'/'} element={<SettingsGeneralTab />} />
            <Route path={'/profile'} element={<SettingsProfileTab />} />
            <Route path={'/project'} element={<SettingsProjectsTab />} />
            <Route path={'/members'} element={<SettingsMembersTab />} />
          </Routes>
        </SPageWrap>
      </SPageCont>
    </SPage>
  );
};
