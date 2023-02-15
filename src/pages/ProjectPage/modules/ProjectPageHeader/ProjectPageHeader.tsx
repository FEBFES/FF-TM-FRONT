import React, { useState } from 'react';
import styles from './ProjectPageHeader.module.css';
import { useTypedSelector } from '../../../../hooks/redux';
import { AddColModal } from '../../components/AddColModal/AddColModal';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../../../routing/routs';
import { useTheme } from '../../../../hooks/useTheme';
import { Switcher } from '../../../../ui/Switcher/Switcher';

export const ProjectPageHeader: React.FC = (): JSX.Element => {
  const { projectName, projectDesc } = useTypedSelector(
    (state) => state.projectDashboard
  );
  const [showAddColModal, setShowAddColModal] = useState(false);
  const navigate = useNavigate();
  const { changeTheme, theme } = useTheme();

  return (
    <header className={styles.header}>
      <div>
        <h1>{projectName || 'Project name'}</h1>
        <div className={styles.breadcrumbs}>
          <h2 onClick={() => navigate(appRoutsPath.ProjectPage.path)}>
            Projects
          </h2>
          <p>/</p>
          <h2>{projectDesc || 'proj desc'}</h2>
        </div>
      </div>

      <div className={styles.header__right}>
        <Switcher isActive={theme === 'dark'} onClick={changeTheme} />
      </div>
      <AddColModal show={showAddColModal} setShow={setShowAddColModal} />
    </header>
  );
};
