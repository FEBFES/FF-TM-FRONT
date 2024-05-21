import React, { useState } from 'react';
import { IProject } from '../../store/projects.type';
import { appRoutsPath } from '../../../../routing/routs';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { DotsIcon, FavoriteIcon } from '../../../../assets/icons/UtilsIcons';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchFavoriteToggle } from '../../store/projects.thunk';
import { fetchDelProject } from '../../store/projects.thunk';
import i18n from 'i18next';
import { setCurProjId } from '../../../kanban-page/store/kanban.slice';
import { Typography, Dropdown, Space } from 'antd';
import {
  SProjectCard,
  SProjectFooter,
  SProjectMain,
  SProjectHeader,
  SDragDropContainer,
} from './project-card.styled';

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
    <SProjectCard onClick={navigateToKanban} key={v4()}>
      <SProjectHeader>
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
      </SProjectHeader>

      <SProjectMain>
        <Typography>{proj.name || ''}</Typography>
        <Typography>{proj.description || ''}</Typography>
      </SProjectMain>

      <Space />
      <SProjectFooter>
        <Typography>
          {i18n.t('pages.kanban.main.card.create.date')}:{' '}
          {new Date(proj.createDate).toDateString() || ''}
        </Typography>

        <SDragDropContainer>
          <Dropdown
            open={showDropDown}
            //todo
            // setShow={setShowDropDown}
          >
            <Typography onClick={() => dispatch(fetchDelProject(proj.id))}>
              {i18n.t('utils.buttons.delete')}
            </Typography>
          </Dropdown>

          <div
            onClick={(e) => {
              e.stopPropagation();
              setShowDropDown(true);
            }}
          >
            <DotsIcon />
          </div>
        </SDragDropContainer>
      </SProjectFooter>
    </SProjectCard>
  );
};
