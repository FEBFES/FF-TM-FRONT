import React, { useState } from 'react';
import styles from './KanbanPageHeader.module.css';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../../../routing/routs';
import {
  DotsIcon,
  FavoriteIcon,
  PlusIcon,
  SearchIcon,
} from '../../../../assets/icons/UtilsIcons';
import human from '../../../../assets/img/human.png';
import { Switcher } from '../../../../ui/Switcher';
import { useTheme } from '../../../../hooks/useTheme';
import { fetchFavoriteToggle } from '../../../ProjectsPage/store/projects.thunk';
import { AddColModal } from '../../components/AddColModal/AddColModal';

export const KanbanPageHeader: React.FC = (): JSX.Element => {
  const { projectName, projId, isFavorite } = useTypedSelector(
    (state) => state.projectKanban
  );
  const theme = useTypedSelector((state) => state.app.theme);
  const [showAddColModal, setShowAddColModal] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { changeTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <div className={styles.breadcrumbs}>
          <span onClick={() => navigate(appRoutsPath.ProjectPage.path)}>
            Projects
          </span>
          <span>/</span>
          <span>{projectName || ''}</span>
        </div>
        <h1 className={styles.title}>{projectName || ''}</h1>
      </div>

      <div className={styles.header__right}>
        <Switcher isActive={theme === 'dark'} onClick={changeTheme} />
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
        <div
          className={styles.favoriteBtn}
          onClick={() =>
            dispatch(
              fetchFavoriteToggle({ projId: projId, isFav: !isFavorite })
            )
          }
        >
          <FavoriteIcon isFav={isFavorite} />
        </div>
        <div className={styles.settingsBtn}>
          <DotsIcon />
        </div>
      </div>

      <AddColModal show={showAddColModal} setShow={setShowAddColModal} />
    </header>
  );
};
