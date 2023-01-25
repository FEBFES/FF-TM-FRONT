import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../routing/routs';
import { v4 } from 'uuid';
import './ProjectPage.scss';
import cn from 'classnames';
import { Modal } from '../../ui/Modal/Modal';
import { InputField } from '../../ui/InputField/InputField';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { fetchProjects } from './store/projects.thunk';
import { IProject } from './store/projects.type';

export const ProjectPage: React.FC = (): JSX.Element => {
  const { projects, error, isLoad } = useTypedSelector(
    (state) => state.projects
  );
  const dispatch = useAppDispatch();
  const [localProjects, setLocalProjects] = useState<IProject[]>([]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [newProjData, setNewProjData] = useState({
    name: '',
  });

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    setLocalProjects(projects);
  }, [projects]);

  return (
    <div className={'projectPage'}>
      <div className={cn('projectPage__header')}>
        <h1>ProjectPage</h1>
        <button onClick={() => setShow(true)}>add</button>
      </div>

      <div className={'projectCont'}>
        {localProjects?.map((el) => {
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
      <div>{isLoad && 'загрузка'}</div>

      <Modal title={'Создать новый проект'} show={show} setShow={setShow}>
        <InputField
          value={newProjData.name}
          onChange={(str) => setNewProjData({ name: str })}
          label={'Name'}
          type={'text'}
        />
      </Modal>
    </div>
  );
};
