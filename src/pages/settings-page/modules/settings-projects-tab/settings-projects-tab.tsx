import React from 'react';
import { useTypedSelector } from '../../../../hooks/redux';
import i18n from 'i18next';
import { ColumnsSection, ProjectSection } from '../../components';
import { Title, Space } from '../../../../ui';

export const SettingsProjectsTab: React.FC = (): JSX.Element => {
  const projectName = useTypedSelector((state) => state.curProj.projectName);

  return (
    <div>
      <Title level={'h3'}>
        {i18n.t('pages.settings.tabs.project.title')} - {projectName || ''}
      </Title>
      <Space direction={'col'} size={'xl'} />

      <ProjectSection />
      <ColumnsSection />
    </div>
  );
};
