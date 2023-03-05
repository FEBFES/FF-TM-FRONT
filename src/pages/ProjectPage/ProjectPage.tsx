import React, { useState } from 'react';
import styles from './ProjectPage.module.css';
import { ProjectPageHeader } from './modules/ProjectPageHeader/ProjectPageHeader';
import { ProjectPageMain } from './modules/ProjectPageMain/ProjectPageMain';
import { TaskWindow } from './modules/TaskWindow/TaskWindow';
import { ProjectPageSubheader } from './modules/ProjectPageSubheader/ProjectPageSubheader';

export const ProjectPage: React.FC = (): JSX.Element => {
  const [showTaskModal, setShowTaskModal] = useState<boolean>(false);
  return (
    <div className={styles.wrap}>
      <div
        className={`${styles.projPage} ${showTaskModal && styles.showModal}`}
      >
        <ProjectPageHeader />
        <ProjectPageSubheader />
        <ProjectPageMain setShowTaskModal={setShowTaskModal} />
      </div>

      {showTaskModal && <TaskWindow setShowWindow={setShowTaskModal} />}
    </div>
  );
};
