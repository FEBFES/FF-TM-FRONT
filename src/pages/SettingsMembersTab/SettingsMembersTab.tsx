import React from 'react';
import styles from './SettingsMembersTab.module.css';
import comStyle from '../../commonStyle.module.css';
import { Title, Text } from '../../ui/Typography';

interface MembersTabProps {}

export const SettingsMembersTab: React.FC<
  MembersTabProps
> = (): JSX.Element => {
  return (
    <div className={styles.membersTab}>
      {/* todo i18next */}
      <Title className={comStyle.title}>Members</Title>
      {/* todo i18next */}
      <Text className={comStyle.text}>
        Manage who was access to this project
      </Text>
    </div>
  );
};
