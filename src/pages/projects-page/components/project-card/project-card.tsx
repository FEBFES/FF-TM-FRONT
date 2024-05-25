import React from 'react';
import { IProject } from '../../store/projects.type';
import { appRoutsPath } from '../../../../routing/routs';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/redux';
import { setCurProjId } from '../../../kanban-page/store/kanban.slice';
import { Typography } from 'antd';
import { SProjectCard } from './project-card.styled';

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

  return (
    <SProjectCard
      bordered
      size={'small'}
      hoverable
      onClick={navigateToKanban}
      key={v4()}
    >
      <Typography.Title level={5}>{proj.name}</Typography.Title>

      {/*<Row>*/}
      {/*  <Col span={21}>*/}
      {/*    <Typography.Paragraph ellipsis>*/}
      {/*      {proj.description || ''}*/}
      {/*    </Typography.Paragraph>*/}
      {/*    <Typography>*/}
      {/*      {moment(proj.createDate).format('DD.MM.YY: HH:MM')}*/}
      {/*    </Typography>*/}
      {/*  </Col>*/}

      {/*  <Col span={3}>*/}
      {/*    <Avatar*/}
      {/*      style={{*/}
      {/*        backgroundColor: 'lightgrey',*/}
      {/*      }}*/}
      {/*      icon={<UserOutlined />}*/}
      {/*    />*/}
      {/*  </Col>*/}
      {/*</Row>*/}

      {/*<SFooter justify={'center'} align={'center'}>*/}
      {/*  <Space>*/}
      {/*    <Button size={'small'} icon={<EditOutlined />} />*/}
      {/*    <Button*/}
      {/*      type={proj.isFavourite ? 'primary' : 'default'}*/}
      {/*      size={'small'}*/}
      {/*      icon={<StarOutlined />}*/}
      {/*    />*/}
      {/*    <Button*/}
      {/*      danger*/}
      {/*      type={'default'}*/}
      {/*      size={'small'}*/}
      {/*      icon={<DeleteOutlined />}*/}
      {/*    />*/}
      {/*  </Space>*/}
      {/*</SFooter>*/}
    </SProjectCard>
  );
};
