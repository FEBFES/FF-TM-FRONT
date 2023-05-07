import React, { useState } from 'react';
import styles from './ProjectCard.module.css';
import { IProject } from '../../store/projects.type';
import { appRoutsPath } from '../../../../routing/routs';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { DotsIcon, FavoriteIcon } from '../../../../assets/icons/UtilsIcons';
import { useAppDispatch } from '../../../../hooks/redux';
import { setCurProj } from '../../store/projects.slice';
import { fetchFavoriteToggle } from '../../store/projects.thunk';
import { DropDown } from '../../../../ui/DropDown/DropDown';
import { fetchDelProject } from '../../store/projects.thunk';

interface ProjectCardProps {
  proj: IProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  proj,
}): JSX.Element => {
  const [showDD, setShowDD] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => {
        navigate(appRoutsPath.KanbanPage.to);
        dispatch(setCurProj(proj));
        localStorage.setItem('curProj', JSON.stringify(proj.id));
      }}
      key={v4()}
      className={styles.projectCard}
    >
      <header className={styles.header}>
        <span className={styles.projectCard__id}>#{proj.id || ''}</span>
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
        <h3 className={styles.card__title}> {proj.name || ''}</h3>
        <p className={styles.card__subtitle}>{proj.description || ''}</p>
      </main>
      <footer className={styles.footer}>
        <p className={styles.projectCard__date}>
          Creation date: {new Date(proj.createDate).toDateString() || ''}
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
          <DropDown show={showDD} setShow={setShowDD}>
            <div onClick={() => dispatch(fetchDelProject(proj.id))}>
              Удалить
            </div>
          </DropDown>

          <div
            onClick={(e) => {
              e.stopPropagation();
              setShowDD(true);
            }}
          >
            <DotsIcon />
          </div>
        </div>
      </footer>
    </div>
  );
};
