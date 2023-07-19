import React, { useState } from 'react';
import styles from './ProjectCard.module.css';
import { IProject } from '../../store/projects.type';
import { appRoutsPath } from '../../../../routing/routs';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { DotsIcon, FavoriteIcon } from '../../../../assets/icons/UtilsIcons';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchFavoriteToggle } from '../../store/projects.thunk';
import { DropDown } from '../../../../ui/DropDown/DropDown';
import { fetchDelProject } from '../../store/projects.thunk';
import i18n from 'i18next';
import { setCurProjId } from '../../../KanbanPage/store/kanban.slice';

interface ProjectCardProps {
  proj: IProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  proj,
}): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateToKanban = () => {
    dispatch(setCurProjId(proj.id));
    navigate(appRoutsPath.KanbanPage.to);
  };

  return (
    <div onClick={navigateToKanban} key={v4()} className={styles.projectCard}>
      <header className={styles.header}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              fetchFavoriteToggle({ projId: proj.id, isFav: !proj.isFavourite })
            );
          }}
        >
          <FavoriteIcon isFav={proj.isFavourite} />
        </div>
      </header>

      <main className={styles.main}>
        <h3 className={styles.card__title}>{proj.name || ''}</h3>
        <p className={styles.card__subtitle}>{proj.description || ''}</p>
      </main>
      <footer className={styles.footer}>
        <p className={styles.projectCard__date}>
          {i18n.t('pages.kanban.main.card.create.date')}:{' '}
          {new Date(proj.createDate).toDateString() || ''}
        </p>
        {/*<Button*/}
        {/*    theme={'danger'}*/}
        {/*    onClick={(e) => {*/}
        {/*        e.stopPropagation();*/}
        {/*        dispatch(fetchDelProject(proj.id));*/}
        {/*    }}*/}
        {/*    className={styles.del__btn}*/}
        {/*>*/}
        {/*    D*/}
        {/*</Button>*/}
        <div className={styles.ddCont}>
          <DropDown show={showDropDown} setShow={setShowDropDown}>
            <div
              className={styles.ddCont__text}
              onClick={() => dispatch(fetchDelProject(proj.id))}
            >
              {i18n.t('utils.buttons.delete')}
            </div>
          </DropDown>

          <div
            onClick={(e) => {
              e.stopPropagation();
              setShowDropDown(true);
            }}
          >
            <DotsIcon />
          </div>
        </div>
      </footer>
    </div>
  );
};
