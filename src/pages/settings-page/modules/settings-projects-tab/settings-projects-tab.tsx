import React from 'react';
import { useTypedSelector } from '../../../../hooks/redux';
import { ColumnsSection, ProjectSection } from '../../components';
import { Typography } from 'antd';

export const SettingsProjectsTab: React.FC = (): JSX.Element => {
  const projectName = useTypedSelector((state) => state.curProj.projectName);

  return (
    <div>
      <Typography.Title level={1}>Проект: {projectName || ''}</Typography.Title>

      <ProjectSection />

      <ColumnsSection />
    </div>
  );
};
