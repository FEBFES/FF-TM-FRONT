import React, { useEffect, useState } from 'react';
import styles from './ProjectSection.module.css';
import i18n from 'i18next';
import { InputField } from '../../../../ui/InputField/InputField';
import { Button } from '../../../../ui/Button/Button';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { fetchUpdateProject } from '../../../ProjectsPage/store/projects.thunk';

interface ProjectSectionProps {}

export const ProjectSection: React.FC<
  ProjectSectionProps
> = (): JSX.Element => {
  const { projectName, projectDesc, projId } = useTypedSelector(
    (state) => state.projectKanban
  );
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>(projectName || '');
  const [desc, setDesc] = useState<string>(projectDesc || '');
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    if (projectName === name && projectDesc === desc) setIsEdit(false);
  }, [name, desc, projectDesc, projectName]);

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
          <h2 className={styles.title}>
            {i18n.t('pages.settings.tabs.section.project.title')}
          </h2>
          <p className={styles.subtitle}>
            {i18n.t('pages.settings.tabs.section.project.subtitle')}
          </p>
        </div>

        {isEdit && (
          <div className={styles.header__right}>
            <Button onClick={() => clearInputs()} theme={'danger'}>
              {i18n.t('utils.buttons.cancel')}
            </Button>
            <Button onClick={() => updateProjInfoHandler()} theme={'submit'}>
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
