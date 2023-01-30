import React from 'react';
import './ProjectCard.scss';
import { IProject } from '../../store/projects.type';
import { appRoutsPath } from '../../../../routing/routs';
import { v4 } from 'uuid';
import { fetchDelProject } from '../../store/projects.thunk';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/redux';

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
      className={'project-card'}
    >
      <h3 className={'card__title'}>{proj.name}</h3>
      <p className={'card__subtitle'}>{proj.description}</p>
      <div className={'line'} />
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(fetchDelProject(proj.id));
        }}
        className={'del__btn'}
      >
        delete
      </button>
    </div>
  );
};
