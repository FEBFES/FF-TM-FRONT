import React from 'react';
import { Title, Text } from '../../../../ui/Typography';
import i18n from 'i18next';
import { IMember } from '../../../KanbanPage/store/kanban.type';
import { MemberCard } from '../../components/MemberCard/MemberCard';
import { Button } from '../../../../ui/Button/Button';
import { useTypedSelector } from '../../../../hooks/redux';
import { SMemberCont, SMemberContHeader } from './SettingsMembersTab.styled';

interface MembersTabProps {}

export const SettingsMembersTab: React.FC<
  MembersTabProps
> = (): JSX.Element => {
  const members = useTypedSelector((state) => state.curProj.members);

  return (
    <div>
      <Title>{i18n.t('pages.settings.tabs.members.title')}</Title>
      <Text>{i18n.t('pages.settings.tabs.members.subtitle')}</Text>

      <SMemberCont>
        <SMemberContHeader>
          <Title level={'h6'}>
            {i18n.t('pages.settings.sidebar.link.members')}: {members.length}
          </Title>
          <Button>{i18n.t('utils.buttons.add')}</Button>
        </SMemberContHeader>
        {members.map((member: IMember, i: number) => {
          return <MemberCard member={member} key={i} />;
        })}
      </SMemberCont>
    </div>
  );
};
