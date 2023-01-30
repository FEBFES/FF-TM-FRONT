import React, { useEffect, useState } from 'react';
import './MainPageMain.scss';
import { appRoutsPath } from '../../../../routing/routs';
import { v4 } from 'uuid';
import { fetchDelProject, fetchProjects } from '../../store/projects.thunk';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { IProject } from '../../store/projects.type';
import { useNavigate } from 'react-router-dom';

interface MainPageMainProps {}

export const MainPageMain: React.FC<MainPageMainProps> = (): JSX.Element => {
  const { projects } = useTypedSelector((state) => state.projects);
  const dispatch = useAppDispatch();
  const [localProjects, setLocalProjects] = useState<IProject[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    setLocalProjects(projects);
  }, [projects]);

  return (
    <div className={'projectCont'}>
      {localProjects?.map((el) => {
        return (
          <div
            onClick={() => {
              navigate(appRoutsPath.KanbanPage.to + el.id);
            }}
            key={v4()}
            className={'project-card'}
          >
            <h3 className={'card__title'}>{el.name}</h3>
            <p className={'card__subtitle'}>{el.description}</p>
            <div className={'line'} />
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(fetchDelProject(el.id));
              }}
              className={'del__btn'}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
