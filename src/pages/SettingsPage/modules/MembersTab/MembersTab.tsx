import React from 'react';
import styles from './MembersTab.module.css';
import comStyle from '../../commonStyle.module.css';

interface MembersTabProps {}

export const MembersTab: React.FC<MembersTabProps> = (): JSX.Element => {
  return (
    <div className={styles.membersTab}>
      <h1 className={comStyle.title}>Members</h1>
      <p className={comStyle.text}>Manage who was access to this project</p>
    </div>
  );
};
