import React from 'react';
import styles from './ProjectCard.module.css';
import { IProject } from '../../store/projects.type';
import { appRoutsPath } from '../../../../routing/routs';
import { v4 } from 'uuid';
import { fetchDelProject } from '../../store/projects.thunk';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/redux';
import { Button } from '../../../../ui/Button/Button';

interface ProjectCardProps {
  proj: IProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  proj,
}): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => {
        navigate(appRoutsPath.KanbanPage.to + proj.id);
      }}
      key={v4()}
      className={styles.projectCard}
    >
      <h3 className={styles.card__title}>{proj.name}</h3>
      <p className={styles.card__subtitle}>{proj.description}</p>
      <div className={styles.line} />
      <Button
        theme={'danger'}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(fetchDelProject(proj.id));
        }}
        className={styles.del__btn}
      >
        delete
      </Button>
    </div>
  );
};
