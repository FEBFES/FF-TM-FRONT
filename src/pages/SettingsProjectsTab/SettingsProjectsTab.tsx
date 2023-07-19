import React, { useEffect } from 'react';
import comStyles from '../SettingsPage/commonStyle.module.css';
import { useTypedSelector } from '../../hooks/redux';
import i18n from 'i18next';
import { ColumnsSection } from './modules/ColumnsSection/ColumnsSection';
import { ProjectSection } from './modules/ProjectSection/ProjectSection';
import { useNavigate } from 'react-router-dom';

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
      <h1 className={comStyles.title}>
        {i18n.t('pages.settings.tabs.project.title')} - {projectName || ''}
      </h1>

      <ProjectSection />
      <ColumnsSection />
    </div>
  );
};
