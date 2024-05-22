import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  SettingsProfileTab,
  SettingsProjectsTab,
  SettingsMembersTab,
  SettingsGeneralTab,
} from './modules';
import { SPageCont, SPageWrap } from './settings-page.styled';

interface SettingsPageProps {}

export const SettingsPage: React.FC<SettingsPageProps> = (): JSX.Element => {
  return (
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
  );
};
