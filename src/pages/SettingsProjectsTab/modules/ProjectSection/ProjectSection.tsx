import React, { useEffect, useState } from 'react';
import styles from './ProjectSection.module.css';
import i18n from 'i18next';
import { InputField } from '../../../../ui/InputField/InputField';
import { Button } from '../../../../ui/Button/Button';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { fetchUpdateProject } from '../../../ProjectsPage/store/projects.thunk';
import { Title } from '../../../../ui/Typography';
import { Paragraph } from '../../../../ui/Typography/Paragraph/Paragraph';

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
    <div className={styles.project}>
      <div className={styles.project__header}>
        <div className={styles.header__left}>
          <Title
          //todo
          // className={styles.title}
          >
            {i18n.t('pages.settings.tabs.section.project.title')}
          </Title>
          <Paragraph
          //todo
          // className={styles.subtitle}
          >
            {i18n.t('pages.settings.tabs.section.project.subtitle')}
          </Paragraph>
        </div>

        {isEdit && (
          <div className={styles.header__right}>
            <Button onClick={() => clearInputs()} variant={'danger'}>
              {i18n.t('utils.buttons.cancel')}
            </Button>
            <Button onClick={() => updateProjInfoHandler()} variant={'submit'}>
              {i18n.t('utils.buttons.save')}
            </Button>
          </div>
        )}
      </div>

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
    </div>
  );
};
