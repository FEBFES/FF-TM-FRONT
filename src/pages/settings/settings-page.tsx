import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ProfileTab, ProjectsTab, MembersTab } from './modules';
import { SPageCont, SPageWrap } from './settings-page.styled';
import { Card, Grid, Tabs } from 'antd';

interface SettingsPageProps {}

export const SettingsPage: React.FC<SettingsPageProps> = (): JSX.Element => {
  const navigate = useNavigate();
  const { useBreakpoint } = Grid;

  return (
    <SPageCont sizeXs={!useBreakpoint().md}>
      <Card
        style={{
          position: !useBreakpoint().md ? 'static' : 'sticky',
          top: '40px',
          width: !useBreakpoint().md ? '100%' : '140px',
        }}
      >
        <Tabs
          size={!useBreakpoint().md ? 'small' : 'large'}
          defaultActiveKey="1"
          tabPosition={!useBreakpoint().md ? 'top' : 'left'}
          style={{
            height: !useBreakpoint().md ? 40 : 110,
          }}
          onChange={(e) => navigate(e)}
          items={[
            // {
            //   label: 'Общие',
            //   key: '/Settings',
            // },
            {
              label: 'Профиль',
              key: '/Settings/Profile',
            },
            {
              label: 'Проекты',
              key: '/Settings/Project',
            },
            {
              label: 'Участники',
              key: '/Settings/Members',
            },
          ]}
        />
      </Card>
      <SPageWrap>
        <Routes>
          {/*<Route path={'/'} element={<GeneralTab />} />*/}
          <Route path={'/Profile'} element={<ProfileTab />} />
          <Route path={'/Project'} element={<ProjectsTab />} />
          <Route path={'/Members'} element={<MembersTab />} />
        </Routes>
      </SPageWrap>
    </SPageCont>
  );
};
