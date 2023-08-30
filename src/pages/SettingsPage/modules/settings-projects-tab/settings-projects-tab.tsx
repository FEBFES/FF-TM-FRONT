import React from 'react';
import { useTypedSelector } from '../../../../hooks/redux';
import i18n from 'i18next';
import { ColumnsSection } from '../../components/ColumnsSection/ColumnsSection';
import { ProjectSection } from '../../components/project-section/project-section';
import { Title } from '../../../../ui/typography';
import { Space } from '../../../../ui/Space/Space';

export const SettingsProjectsTab: React.FC = (): JSX.Element => {
  const projectName = useTypedSelector((state) => state.curProj.projectName);

  return (
    <div>
      <Title level={'h3'}>
        {i18n.t('pages.settings.tabs.project.title')} - {projectName || ''}
      </Title>
      <Space my={'xl'} />

      <ProjectSection />
      <ColumnsSection />
    </div>
  );
};
