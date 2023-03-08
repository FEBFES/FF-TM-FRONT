import React from 'react';
import styles from './ProjectCard.module.css';
import { IProject } from '../../store/projects.type';
import { appRoutsPath } from '../../../../routing/routs';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { DotsIcon, FavoriteIcon } from '../../../../assets/icons/UtilsIcons';

interface ProjectCardProps {
  proj: IProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  proj,
}): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(appRoutsPath.KanbanPage.to, { state: { curProj: proj.id } });
      }}
      key={v4()}
      className={styles.projectCard}
    >
      <header className={styles.header}>
        <span className={styles.projectCard__id}>#{proj.id || ''}</span>
        <FavoriteIcon />
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
        <DotsIcon />
      </footer>
    </div>
  );
};
