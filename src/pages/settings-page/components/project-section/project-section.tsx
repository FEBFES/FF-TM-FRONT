import React, { useEffect, useState } from 'react';
import i18n from 'i18next';
import { InputField } from '../../../../ui/input-field/Input-field';
import { Button } from '../../../../ui/button/button';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { fetchUpdateProject } from '../../../projects-page/store/projects.thunk';
import { Text, Title } from '../../../../ui/typography';
import { Space } from '../../../../ui/space/space';
import {
  SProjectContainter,
  SHeaderLeftSection,
  SHeaderRightSection,
  SProjectHeader,
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
      <SProjectHeader>
        <SHeaderLeftSection>
          <Title level={'h5'}>
            {i18n.t('pages.settings.tabs.section.project.title')}
          </Title>
          <Text>{i18n.t('pages.settings.tabs.section.project.subtitle')}</Text>
        </SHeaderLeftSection>

        {isEdit && (
          <SHeaderRightSection>
            <Button onClick={() => clearInputs()} variant={'danger'}>
              {i18n.t('utils.buttons.cancel')}
            </Button>
            <Button onClick={() => updateProjInfoHandler()} variant={'submit'}>
              {i18n.t('utils.buttons.save')}
            </Button>
          </SHeaderRightSection>
        )}
      </SProjectHeader>
      <Space my={'xs'} />

      <div>
        <InputField
          withLabel
          value={name}
          onChange={(e) => {
            setIsEdit(true);
            setName(e.target.value);
          }}
          placeholder={i18n.t('utils.any.name')}
        />

        <InputField
          withLabel
          value={desc}
          onChange={(e) => {
            setIsEdit(true);
            setDesc(e.target.value);
          }}
          placeholder={i18n.t('utils.any.description')}
        />
      </div>
    </SProjectContainter>
  );
};
