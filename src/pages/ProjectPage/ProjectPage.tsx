import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../routing/routs';
import { useGetAllProjectsQuery } from './api/projects.api';
import { v4 } from 'uuid';
import './ProjectPage.scss';
import cn from 'classnames';
import { Modal } from '../../ui/Modal/Modal';

export interface IProject {
  createDate: number;
  description: string;
  id: number;
  name: string;
}

export const ProjectPage: React.FC = (): JSX.Element => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetAllProjectsQuery('');
  const canShowData = data && !isLoading && !error;
  const [show, setShow] = useState(false);
  useEffect(() => {
    setProjects(data);
  }, [data]);

  return (
    <div className={'projectPage'}>
      <div className={cn('projectPage__header')}>
        <h1>ProjectPage</h1>
        <button onClick={() => setShow(true)}>add</button>
      </div>

      <div className={'projectCont'}>
        {canShowData &&
          projects?.map((el) => {
            const date = `${new Date(el.createDate).getDay()}.${
              new Date(el.createDate).getMonth() + 1
            }.${new Date(el.createDate).getFullYear()}`;
            return (
              <div
                onClick={() => {
                  navigate(appRoutsPath.KanbanPage, { state: { id: el.id } });
                }}
                style={{
                  border: '1px solid black',
                  width: '200px',
                  padding: '20px',
                }}
                key={v4()}
              >
                <div>id: {el.id}</div>
                <div>created: {date}</div>
                <h1>name: {el.name}</h1>
                <p>desc: {el.description}</p>
                <button>delete</button>
              </div>
            );
          })}
      </div>
      <div>{error && 'ошибка'}</div>
      <div>{isLoading && 'загрузка'}</div>

      <Modal title={'asd'} show={show} setShow={setShow}>
        <span>asd</span>
      </Modal>
    </div>
  );
};
