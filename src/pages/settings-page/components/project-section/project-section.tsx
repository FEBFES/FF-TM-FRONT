import React, { useEffect, useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { fetchUpdateProject } from '../../../projects-page/store/projects.thunk';
import { Input, Button, Space } from 'antd';
import {
  SProjectContainter,
  SHeaderRightSection,
} from './project-section.styled';

interface ProjectSectionProps {}

export const ProjectSection: React.FC<
  ProjectSectionProps
> = (): JSX.Element => {
  const { projectName, projectDesc, projId } = useTypedSelector(
    (state) => state.curProj
  );
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>(projectName || '');
  const [desc, setDesc] = useState<string>(projectDesc || '');
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    if (projectName === name && projectDesc === desc) setIsEdit(false);
  }, [name, desc, projectDesc, projectName]);

  useEffect(() => {
    projectName && setName(projectName);
    projectDesc && setDesc(projectDesc);
  }, [projectName, projectDesc]);

  const clearInputs = () => {
    setDesc(projectDesc || '');
    setName(projectName || '');
  };

  const updateProjInfoHandler = () => {
    if (projId) {
      dispatch(fetchUpdateProject({ id: projId, name, desc })).catch((err) => {
        clearInputs();
      });
      setIsEdit(false);
    }
  };

  return (
    <SProjectContainter>
      <div>
        {isEdit && (
          <SHeaderRightSection>
            <Button onClick={() => clearInputs()}>Отменить</Button>
            <Button onClick={() => updateProjInfoHandler()}>Сохранить</Button>
          </SHeaderRightSection>
        )}
      </div>
      <Space />

      <div>
        <Input
          value={name}
          size={'large'}
          onChange={(e) => {
            setIsEdit(true);
            setName(e.target.value);
          }}
          placeholder={'Название'}
        />

        <Input
          value={desc}
          size={'large'}
          onChange={(e) => {
            setIsEdit(true);
            setDesc(e.target.value);
          }}
          placeholder={'Описание'}
        />
      </div>
    </SProjectContainter>
  );
};
