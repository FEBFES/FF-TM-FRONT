import React, { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import { FavoriteIcon } from '../../../../assets/icons/UtilsIcons';
import { Switcher } from '../../../../ui/switcher/switcher';
import { useTheme } from '../../../../hooks/useTheme';
import { fetchFavoriteToggle } from '../../../projects-page/store/projects.thunk';
import { fetchGetProjectMembers } from '../../store/kanban.thunk';
import { SearchInput } from '../../components/search-input/search-input';
import { Breadcrumbs } from '../../../../ui/breadcrumbs/breadcrumbs';
import { Title } from '../../../../ui/typography';
import i18n from 'i18next';
import { appRoutsPath } from '../../../../routing/routs';
import { Flex } from '../../../../ui/flex/flex';
import { Divider } from '../../../../ui/divider/divider';
import { SHeader, SFavoriteButton } from './kanban-page-header.styled';

interface KanbanPageHeaderProps {}

export const KanbanPageHeader: React.FC<
  KanbanPageHeaderProps
> = (): JSX.Element => {
  const { projectName, projId, isFavorite, members } = useTypedSelector(
    (state) => state.curProj
  );
  const theme = useTypedSelector((state) => state.app.theme);
  const dispatch = useAppDispatch();
  const { changeTheme } = useTheme();

  useEffect(() => {
    if (projId && members.length === 0)
      dispatch(fetchGetProjectMembers({ projId }));
  }, [projId, members, dispatch]);

  return (
    <SHeader>
      <Flex dir={'col'}>
        <Title level={'h4'}>{projectName || ''}</Title>

        <Breadcrumbs
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
      <Flex ai={'center'} jc={'between'}>
        <Switcher isActive={theme === 'dark'} onClick={changeTheme} />
        <SearchInput />
        <Divider direction="col" />
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
