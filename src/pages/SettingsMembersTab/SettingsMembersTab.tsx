import React from 'react';
import styles from './SettingsMembersTab.module.css';
import comStyle from '../../commonStyle.module.css';

interface MembersTabProps {}

export const SettingsMembersTab: React.FC<
  MembersTabProps
> = (): JSX.Element => {
  return (
    <div className={styles.membersTab}>
      {/* todo i18next */}
      <h1 className={comStyle.title}>Members</h1>
      {/* todo i18next */}
      <p className={comStyle.text}>Manage who was access to this project</p>
    </div>
  );
};
