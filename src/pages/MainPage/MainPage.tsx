import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../routing/routs';
import { v4 } from 'uuid';
import './MainPage.scss';
import cn from 'classnames';
import { Modal } from '../../ui/Modal/Modal';
import { InputField } from '../../ui/InputField/InputField';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import {
  fetchAddProject,
  fetchDelProject,
  fetchProjects,
} from './store/projects.thunk';
import { IProject } from './store/projects.type';

export const MainPage: React.FC = (): JSX.Element => {
  const { projects, error } = useTypedSelector((state) => state.projects);
  const dispatch = useAppDispatch();
  const [localProjects, setLocalProjects] = useState<IProject[]>([]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [name, setName] = useState<any>('');
  const [desc, setDesc] = useState<any>('');

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    setLocalProjects(projects);
  }, [projects]);

  return (
    <div className={'mainPage'}>
      <div className={cn('mainPage__header')}>
        <span className={'page__title'}>Projects</span>
        <button className={'page__addBtn'} onClick={() => setShow(true)}>
          add
        </button>
      </div>

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
      <div>{error && 'ошибка'}</div>

      <Modal
        onSubmit={() => dispatch(fetchAddProject({ name, desc }))}
        title={'Создать новый проект'}
        show={show}
        setShow={setShow}
      >
        <InputField
          type={'text'}
          label={'name'}
          value={name}
          onChange={(name) => setName(name)}
        />
        <InputField
          type={'text'}
          label={'desc'}
          value={desc}
          onChange={(desc) => setDesc(desc)}
        />
      </Modal>
    </div>
  );
};