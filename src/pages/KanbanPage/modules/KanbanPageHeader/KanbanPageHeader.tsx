import React, { useEffect } from 'react';
import styles from './KanbanPageHeader.module.css';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../../../routing/routs';
import { FavoriteIcon } from '../../../../assets/icons/UtilsIcons';
import { Switcher } from '../../../../ui/Switcher/Switcher';
import { useTheme } from '../../../../hooks/useTheme';
import { fetchFavoriteToggle } from '../../../ProjectsPage/store/projects.thunk';
import i18n from 'i18next';
import { fetchGetProjectMembers } from '../../store/kanban.thunk';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { Text, Title } from '../../../../ui/Typography';

interface KanbanPageHeaderProps {}

export const KanbanPageHeader: React.FC<
  KanbanPageHeaderProps
> = (): JSX.Element => {
  const { projectName, projId, isFavorite, members } = useTypedSelector(
    (state) => state.curProj
  );
  const theme = useTypedSelector((state) => state.app.theme);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { changeTheme } = useTheme();

  useEffect(() => {
    if (projId && members.length === 0)
      dispatch(fetchGetProjectMembers({ projId }));
  }, [projId, members, dispatch]);

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <Title
          level={'h4'}
          // todo
          // className={styles.title}
        >
          {projectName || ''}
        </Title>
        {/*//TODO CHANGE TO UI BREADCRUMBS*/}
        <div className={styles.breadcrumbs}>
          <Text onClick={() => navigate(appRoutsPath.ProjectPage.path)}>
            {i18n.t('pages.kanban.header.breadcrumbs.1')}
          </Text>
          <Text>/</Text>
          <Text>{projectName || ''}</Text>
        </div>
      </div>

      <div className={styles.header__right}>
        <Switcher isActive={theme === 'dark'} onClick={changeTheme} />

        <SearchInput />

        <div className={styles.line} />
        <div
          className={styles.favoriteBtn}
          onClick={() =>
            dispatch(
              fetchFavoriteToggle({ projId: projId, isFav: !isFavorite })
            )
          }
        >
          <FavoriteIcon isFav={isFavorite} />
        </div>
        {/*<div className={styles.settingsBtn}>*/}
        {/*  <DotsIcon />*/}
        {/*</div>*/}
      </div>
    </header>
  );
};
