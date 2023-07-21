import React from 'react';
import styles from './SettingsMembersTab.module.css';
import { Title, Text } from '../../../../ui/Typography';
import i18n from 'i18next';
import { IMember } from '../../../KanbanPage/store/kanban.type';
import { v4 } from 'uuid';
import { MemberCard } from '../../MemberCard/MemberCard';

interface MembersTabProps {}

export const SettingsMembersTab: React.FC<
  MembersTabProps
> = (): JSX.Element => {
  // const members = useTypedSelector((state) => state.curProj.members);
  const members: IMember[] = [
    {
      displayName: 'display',
      email: 'test@mail.ru',
      firstName: 'firstName',
      id: +v4(),
      lastName: 'lastName',
      userPic: null,
      username: 'userName',
    },
    {
      displayName: 'display',
      email: 'test@mail.ru',
      firstName: 'firstName',
      id: +v4(),
      lastName: 'lastName',
      userPic: null,
      username: 'userName',
    },
    {
      displayName: 'display',
      email: 'test@mail.ru',
      firstName: 'firstName',
      id: +v4(),
      lastName: 'lastName',
      userPic: null,
      username: 'userName',
    },
    {
      displayName: 'display',
      email: 'test@mail.ru',
      firstName: 'firstName',
      id: +v4(),
      lastName: 'lastName',
      userPic: null,
      username: 'userName',
    },
    {
      displayName: 'display',
      email: 'test@mail.ru',
      firstName: 'firstName',
      id: +v4(),
      lastName: 'lastName',
      userPic: null,
      username: 'userName',
    },
    {
      displayName: 'display',
      email: 'test@mail.ru',
      firstName: 'firstName',
      id: +v4(),
      lastName: 'lastName',
      userPic: null,
      username: 'userName',
    },
  ];
  return (
    <div className={styles.membersTab}>
      {/* todo i18next */}
      <Title>{i18n.t('pages.settings.tabs.members.title')}</Title>
      {/* todo i18next */}
      <Text>{i18n.t('pages.settings.tabs.members.subtitle')}</Text>

      <div className={styles.membersCont}>
        {members.map((member: IMember, i) => {
          return <MemberCard member={member} key={i} />;
        })}
      </div>
    </div>
  );
};
