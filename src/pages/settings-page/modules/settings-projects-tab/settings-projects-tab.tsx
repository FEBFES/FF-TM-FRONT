import React from 'react';
import { useTypedSelector } from '../../../../hooks/redux';
import i18n from 'i18next';
import { ColumnsSection, ProjectSection } from '../../components';
import { Typography, Space } from 'antd';

export const SettingsProjectsTab: React.FC = (): JSX.Element => {
  const projectName = useTypedSelector((state) => state.curProj.projectName);

  return (
    <div>
      <Typography>
        {i18n.t('pages.settings.tabs.project.title')} - {projectName || ''}
      </Typography>
      <Space />

      <ProjectSection />
      <ColumnsSection />
    </div>
  );
};
