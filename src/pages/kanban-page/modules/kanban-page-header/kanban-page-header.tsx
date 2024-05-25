import React, { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { FavoriteIcon } from '../../../../assets/icons/UtilsIcons';
import { fetchFavoriteToggle } from '../../../projects-page/store/projects.thunk';
import { fetchGetProjectMembers } from '../../store/kanban.thunk';
import { SearchInput } from '../../components/search-input/search-input';
import { Typography, Flex, Breadcrumb, Divider } from 'antd';
import i18n from 'i18next';
import { appRoutsPath } from '../../../../routing/routs';
import { SHeader, SFavoriteButton } from './kanban-page-header.styled';

interface KanbanPageHeaderProps {}

export const KanbanPageHeader: React.FC<
  KanbanPageHeaderProps
> = (): JSX.Element => {
  const { projectName, projId, isFavorite, members } = useTypedSelector(
    (state) => state.curProj
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (projId && members.length === 0)
      dispatch(fetchGetProjectMembers({ projId }));
  }, [projId, members, dispatch]);

  return (
    <SHeader>
      <Flex dir={'col'}>
        <Typography>{projectName || ''}</Typography>

        <Breadcrumb
          items={[
            {
              href: appRoutsPath.ProjectPage.path,
              title: i18n.t('pages.kanban.header.breadcrumbs.1'),
            },
            { title: projectName || '' },
          ]}
          //todo add separator to UI components
          // separator
        />
      </Flex>
      <Flex>
        {/*//todo*/}
        {/*<Switcher isActive={theme === 'dark'} onClick={changeTheme} />*/}
        <SearchInput />
        <Divider />
        <SFavoriteButton
          onClick={() =>
            dispatch(
              fetchFavoriteToggle({ projId: projId, isFav: !isFavorite })
            )
          }
        >
          <FavoriteIcon isFav={isFavorite} />
        </SFavoriteButton>
        {/*<Flex ai={'center'}>*/}
        {/*  <DotsIcon />*/}
        {/*</Flex>*/}
      </Flex>
    </SHeader>
  );
};
