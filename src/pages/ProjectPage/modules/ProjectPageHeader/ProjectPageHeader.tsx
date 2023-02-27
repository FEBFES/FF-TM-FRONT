import React, { useState } from 'react';
import styles from './ProjectPageHeader.module.css';
import { useTypedSelector } from '../../../../hooks/redux';
import { AddColModal } from '../../components/AddColModal/AddColModal';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../../../routing/routs';
import {
  DotsIcon,
  FavoriteIcon,
  PlusIcon,
  SearchIcon,
} from '../../../../assets/icons/UtilsIcons';
import human from '../../../../assets/img/human.png';

export const ProjectPageHeader: React.FC = (): JSX.Element => {
  const { projectName } = useTypedSelector((state) => state.projectDashboard);
  const [showAddColModal, setShowAddColModal] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <div className={styles.breadcrumbs}>
          <span onClick={() => navigate(appRoutsPath.ProjectPage.path)}>
            Projects
          </span>
          <span>/</span>
          <span>{projectName || 'proj desc'}</span>
        </div>
        <h1 className={styles.title}>{projectName || 'Project name'}</h1>
      </div>

      <div className={styles.header__right}>
        {/*<Switcher isActive={theme === 'dark'} onClick={changeTheme} />*/}
        <div className={styles.inputCont}>
          <input className={styles.input} type="text" />
          <div className={styles.inputIcon}>
            <SearchIcon />
          </div>
        </div>

        <div className={styles.teams}>
          {/*//todo change to avatar component*/}
          <img className={styles.avatar} src={human} alt="avatar" />
          <img className={styles.avatar} src={human} alt="avatar" />
          <div className={styles.addUserBtn}>
            <PlusIcon />
          </div>
        </div>
        <div className={styles.line} />
        <div className={styles.favoriteBtn}>
          <FavoriteIcon />
        </div>
        <div className={styles.settingsBtn}>
          <DotsIcon />
        </div>
      </div>

      <AddColModal show={showAddColModal} setShow={setShowAddColModal} />
    </header>
  );
};
