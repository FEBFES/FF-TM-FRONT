import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/redux';
import i18n from 'i18next';
import { ColumnsSection } from './modules/ColumnsSection/ColumnsSection';
import { ProjectSection } from './modules/ProjectSection/ProjectSection';
import { useNavigate } from 'react-router-dom';
import { Title } from '../../ui/Typography';
import { Space } from '../../ui/Space/Space';

export const SettingsProjectsTab: React.FC = (): JSX.Element => {
  const projectName = useTypedSelector((state) => state.curProj.projectName);
  const curProjId = useTypedSelector((state) => state.curProj.projId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!curProjId) {
      navigate('/');
    }
  }, [curProjId, navigate]);

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
