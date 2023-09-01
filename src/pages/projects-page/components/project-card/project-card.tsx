import React, { useState } from 'react';
import { IProject } from '../../store/projects.type';
import { appRoutsPath } from '../../../../routing/routs';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { DotsIcon, FavoriteIcon } from '../../../../assets/icons/UtilsIcons';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchFavoriteToggle } from '../../store/projects.thunk';
import { DropDown } from '../../../../ui/drop-down/drop-down';
import { fetchDelProject } from '../../store/projects.thunk';
import i18n from 'i18next';
import { setCurProjId } from '../../../KanbanPage/store/kanban.slice';
import { Text, Title } from '../../../../ui/typography';
import { Space } from '../../../../ui/space/space';
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
        <Title level={'h5'}>{proj.name || ''}</Title>
        <Title level={'h6'}>{proj.description || ''}</Title>
      </SProjectMain>

      <Space direction={'col'} size={'s'} />
      <SProjectFooter>
        <Text>
          {i18n.t('pages.kanban.main.card.create.date')}:{' '}
          {new Date(proj.createDate).toDateString() || ''}
        </Text>

        <SDragDropContainer>
          <DropDown show={showDropDown} setShow={setShowDropDown}>
            <Text onClick={() => dispatch(fetchDelProject(proj.id))}>
              {i18n.t('utils.buttons.delete')}
            </Text>
          </DropDown>

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
