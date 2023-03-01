import React from 'react';
import styles from './ProfileTab.module.css';
import comStyle from '../../commonStyle.module.css';

interface ProfileTabProps {}

export const ProfileTab: React.FC<ProfileTabProps> = (): JSX.Element => {
  return (
    <div className={styles.profileTab}>
      <h1 className={comStyle.title}>Profile</h1>
      <p className={comStyle.text}>Manage your F/F profile</p>
    </div>
  );
};
