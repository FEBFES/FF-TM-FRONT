import React from 'react';
import styles from './ProfileTab.module.css';
import comStyle from '../../commonStyle.module.css';
import { PlusIcon } from '../../../../assets/icons/UtilsIcons';
import { instance } from '../../../../api/http';

interface ProfileTabProps {}

export const ProfileTab: React.FC<ProfileTabProps> = (): JSX.Element => {
  const uploadNewAvatar = (e: any) => {
    const photo = e.target.files[0];
    const formData = new FormData();
    formData.append('image', photo);
    instance.post('files/user-pic/1', formData).then((res) => {});
  };
  return (
    <div className={styles.profileTab}>
      <h1 className={comStyle.title}>Profile</h1>
      <p className={comStyle.text}>Manage your F/F profile</p>

      <div>
        <h2 className={comStyle.subtitle}>Profile image</h2>
        <label className={styles.fileInput_label} htmlFor="inputFIle">
          <div className={styles.fileInput_label_text}>
            <PlusIcon />
          </div>
        </label>
        <input
          id={'inputFIle'}
          className={styles.fileInput}
          onChange={uploadNewAvatar}
          type={'file'}
        />
      </div>
    </div>
  );
};
