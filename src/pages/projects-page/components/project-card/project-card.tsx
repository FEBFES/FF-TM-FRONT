import React, { useState } from 'react';
import { IProject } from '../../store/projects.type';
import { appRoutsPath } from '../../../../routing/routs';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchFavoriteToggle } from '../../store/projects.thunk';
import { fetchDelProject } from '../../store/projects.thunk';
import { setCurProjId } from '../../../kanban-page/store/kanban.slice';
import {
  Typography,
  Dropdown,
  Space,
  Card,
  Button,
  Divider,
  Flex,
  Avatar,
  Col,
  Row,
} from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { SFooter, SProjectCard } from './project-card.styled';
import moment from 'moment';

interface ProjectCardProps {
  proj: IProject;
}

const items = [
  {
    key: 'favorite',
    label: (
      <Typography
      // onClick={() => dispatch(fetchFavoriteToggle({ projId: proj.id, isFav: !proj.isFavourite }))}
      >
        Избранное
      </Typography>
    ),
  },
  {
    key: 'delete',
    label: (
      <Typography
      // onClick={() => dispatch(fetchDelProject(proj.id))}
      >
        Удалить
      </Typography>
    ),
  },
];

export const ProjectCard: React.FC<ProjectCardProps> = ({
  proj,
}): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateToKanban = () => {
    dispatch(setCurProjId(proj.id));
    // navigate(appRoutsPath.KanbanPage.to);
  };

  return (
    <SProjectCard
      bordered
      size={'small'}
      hoverable
      title={proj.name || ''}
      onClick={navigateToKanban}
      key={v4()}
    >
      <Row>
        <Col span={21}>
          <Typography.Paragraph ellipsis>
            {proj.description || ''}
          </Typography.Paragraph>
          <Typography>
            {moment(proj.createDate).format('DD.MM.YY: HH:MM')}
          </Typography>
        </Col>

        <Col span={3}>
          <Avatar
            style={{
              backgroundColor: 'lightgrey',
            }}
            icon={<UserOutlined />}
          />
        </Col>
      </Row>

      <SFooter justify={'center'} align={'center'}>
        <Space>
          <Button size={'small'} icon={<EditOutlined />} />
          <Button
            type={proj.isFavourite ? 'primary' : 'default'}
            size={'small'}
            icon={<StarOutlined />}
          />
          <Button
            danger
            type={'default'}
            size={'small'}
            icon={<DeleteOutlined />}
          />
        </Space>
      </SFooter>
    </SProjectCard>
  );
};
