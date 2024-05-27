import React from 'react';
import { IProject } from '../../store/projects.type';
import { appRoutsPath } from '../../../../routing/routs';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/redux';
import { setCurProjId } from '../../../kanban-page/store/kanban.slice';
import { Button, Dropdown, Flex, Typography } from 'antd';
import { SProjectCard } from './project-card.styled';
import { EllipsisOutlined } from '@ant-design/icons';
import { SButton } from '../../projects-page.styled';
import {
  fetchDelProject,
  fetchFavoriteToggle,
} from '../../store/projects.thunk';

interface ProjectCardProps {
  proj: IProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  proj,
}): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateToKanban = () => {
    dispatch(setCurProjId(proj.id));
    navigate(appRoutsPath.KanbanPage.to);
  };

  const favoriteToggle = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      fetchFavoriteToggle({ projId: proj.id, isFav: !proj.isFavourite })
    );
  };

  const deleteProject = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(fetchDelProject(proj.id));
  };

  return (
    <SProjectCard
      bordered
      size={'small'}
      hoverable
      onClick={navigateToKanban}
      key={v4()}
    >
      <Flex justify={'space-between'}>
        <Typography.Title level={5}>{proj.name}</Typography.Title>

        <Flex align={'start'}>
          <Dropdown
            trigger={['click']}
            menu={{
              items: [
                {
                  key: '2',
                  label: (
                    <Button onClick={favoriteToggle} type={'link'}>
                      {proj.isFavourite ? 'Из избранного' : 'В избранное'}
                    </Button>
                  ),
                },
                {
                  key: '3',
                  label: (
                    <Button onClick={deleteProject} danger type={'link'}>
                      Удалить
                    </Button>
                  ),
                },
              ],
            }}
          >
            <SButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              size={'small'}
              type={'text'}
            >
              <EllipsisOutlined />
            </SButton>
          </Dropdown>
        </Flex>
      </Flex>
    </SProjectCard>
  );
};
