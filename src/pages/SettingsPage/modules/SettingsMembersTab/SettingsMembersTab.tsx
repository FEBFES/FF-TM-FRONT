import React from 'react';
import styles from './SettingsMembersTab.module.css';
import { Title, Text } from '../../../../ui/Typography';
import i18n from 'i18next';
import { IMember } from '../../../KanbanPage/store/kanban.type';
import { MemberCard } from '../../components/MemberCard/MemberCard';
import { Button } from '../../../../ui/Button/Button';
import { useTypedSelector } from '../../../../hooks/redux';

interface MembersTabProps {}

export const SettingsMembersTab: React.FC<
  MembersTabProps
> = (): JSX.Element => {
  const members = useTypedSelector((state) => state.curProj.members);

  return (
    <div className={styles.membersTab}>
      <Title>{i18n.t('pages.settings.tabs.members.title')}</Title>
      <Text>{i18n.t('pages.settings.tabs.members.subtitle')}</Text>

      <div className={styles.membersCont}>
        <div className={styles.membersCont__header}>
          <Title level={'h6'}>
            {i18n.t('pages.settings.sidebar.link.members')}: {members.length}
          </Title>
          <Button>{i18n.t('utils.buttons.add')}</Button>
        </div>
        {members.map((member: IMember, i: number) => {
          return <MemberCard member={member} key={i} />;
        })}
      </div>
    </div>
  );
};
