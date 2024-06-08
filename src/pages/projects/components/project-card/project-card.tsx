import React, { useCallback } from 'react';
import { IProject } from '../../__data__/type/projects.type';
import { appRoutsPath } from '../../../../routing/route-list';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/redux';
import { Card } from 'antd';
import { SProjectCard, STitle } from './project-card.styled';
import { CardDropDown } from '../card-drop-down/card-drop-down';
import { deleteProjectThunk } from '../../__data__/thunk/delete-project';
import { favProjectsThunk } from '../../__data__/thunk/fav-toggle-project';
import { setCurProjId } from '../../../kanban/__data__/reducers/kanban.slice';

interface ProjectCardProps {
  proj: IProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  proj,
}): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateToKanban = useCallback(() => {
    dispatch(setCurProjId(proj.id));
    navigate(appRoutsPath.KanbanPage.to);
  }, []);

  const favoriteToggle = useCallback(() => {
    dispatch(favProjectsThunk({ projId: proj.id, isFav: !proj.isFavourite }));
  }, []);

  const deleteProject = useCallback(() => {
    dispatch(deleteProjectThunk(proj.id));
  }, []);

  return (
    <Card bordered size={'small'} hoverable>
      <SProjectCard justify={'space-between'} align="start">
        <STitle onClick={navigateToKanban} level={5}>
          {proj.name}
        </STitle>

        <CardDropDown
          isFavourite={proj.isFavourite}
          favoriteToggle={favoriteToggle}
          deleteProject={deleteProject}
        />
      </SProjectCard>
    </Card>
  );
};
