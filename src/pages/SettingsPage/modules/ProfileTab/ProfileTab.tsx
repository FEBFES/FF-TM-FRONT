import React, { useEffect, useState } from 'react';
import styles from './ProfileTab.module.css';
import comStyle from '../../commonStyle.module.css';
import { faPen, faTrash, faCamera } from '@fortawesome/free-solid-svg-icons';
import { instance } from '../../../../api/http';
import { InputField } from '../../../../ui/InputField/InputField';
import { useTypedSelector } from '../../../../hooks/redux';
import { serverString } from '../../../../config';
import { Button } from '../../../../ui/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProfileTabProps {}

export const ProfileTab: React.FC<ProfileTabProps> = (): JSX.Element => {
  const userInfo = useTypedSelector((state) => state.user.userInfo);

  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

  const [inputEmail, setInputEmail] = useState<string>(userInfo?.email || '');
  const [inputUsername, setInputUsername] = useState<string>(
    userInfo?.username || ''
  );
  const [inputFirstName, setInputFirstName] = useState<string>(
    userInfo?.firstName || ''
  );
  const [inputLastName, setInputLastName] = useState<string>(
    userInfo?.lastName || ''
  );
  const [inputDisplayName, setInputUserDisplayName] = useState<string>(
    userInfo?.displayName || ''
  );

  useEffect(() => {
    if (
      inputEmail !== userInfo?.email ||
      inputUsername !== userInfo?.username ||
      inputFirstName !== userInfo?.firstName ||
      inputLastName !== userInfo?.lastName ||
      inputDisplayName !== userInfo?.displayName
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    inputEmail,
    inputUsername,
    inputFirstName,
    inputLastName,
    inputDisplayName,
  ]);

  useEffect(() => {
    resetInputsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const resetInputsData = () => {
    setInputEmail(userInfo?.email || '');
    setInputUsername(userInfo?.username || '');
    setInputFirstName(userInfo?.firstName || '');
    setInputLastName(userInfo?.lastName || '');
    setInputUserDisplayName(userInfo?.displayName || '');
  };

  const deleteUserAvatar = () => {
    instance.post(`files/user-pic/${userInfo?.id}`, '');
  };

  const changeUserInfo = () => {
    instance.put(`users/${userInfo?.id}`, {
      email: inputEmail,
      username: inputUsername,
      firstName: inputFirstName,
      lastName: inputLastName,
      displayName: inputDisplayName,
    });
  };

  const uploadNewAvatar = (e: any) => {
    const photo = e.target.files[0];
    const formData = new FormData();
    formData.append('image', photo);
    instance.post(`files/user-pic/${userInfo?.id}`, formData);
  };

  return (
    <div className={styles.profileTab}>
      {/* todo i18next */}
      <h1 className={comStyle.title}>Profile</h1>
      {/* todo i18next */}
      <p className={comStyle.text}>Manage your F/F profile</p>

      <div className={styles.userBackground} />

      <div className={styles.userAvatarCont}>
        {userInfo?.userPic ? (
          <img
            className={styles.userAvatarCont__image}
            src={`${serverString}${userInfo.userPic}`}
            // todo i18next
            alt="avatar"
          />
        ) : (
          <FontAwesomeIcon icon={faCamera} size={'lg'} />
        )}
        <div
          className={`${styles.fileInput__btn} ${styles.fileInput_delete}`}
          onClick={deleteUserAvatar}
        >
          <FontAwesomeIcon icon={faTrash} size={'2xs'} />
        </div>
        <label
          className={`${styles.fileInput__btn} ${styles.fileInput_label}`}
          htmlFor="inputFIle"
        >
          <FontAwesomeIcon icon={faPen} size={'2xs'} />
        </label>
        <input
          id={'inputFIle'}
          className={styles.fileInput}
          onChange={uploadNewAvatar}
          type={'file'}
        />
      </div>

      <div className={styles.inputsContainer}>
        {/* todo i18next */}
        <h2 className={comStyle.subtitle}>User info</h2>
        {/* todo i18next */}
        <InputField
          withLabel
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          placeholder={'Email'}
          type={'text'}
        />
        {/* todo i18next */}
        <InputField
          withLabel
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          placeholder={'Username'}
          type={'text'}
        />
        {/* todo i18next */}
        <InputField
          withLabel
          value={inputFirstName}
          onChange={(e) => setInputFirstName(e.target.value)}
          placeholder={'FirstName'}
          type={'text'}
        />
        {/* todo i18next */}
        <InputField
          withLabel
          value={inputLastName}
          onChange={(e) => setInputLastName(e.target.value)}
          placeholder={'LastName'}
          type={'text'}
        />
        {/* todo i18next */}
        <InputField
          withLabel
          value={inputDisplayName}
          onChange={(e) => setInputUserDisplayName(e.target.value)}
          placeholder={'DisplayName'}
          type={'text'}
        />
      </div>

      <div className={styles.btnContainer}>
        {/*todo i18next*/}
        {!btnDisabled && (
          <Button theme={'danger'} onClick={resetInputsData}>
            Cancel
          </Button>
        )}
        <Button
          disabled={btnDisabled}
          theme={'primary'}
          onClick={changeUserInfo}
        >
          Update
        </Button>
      </div>
    </div>
  );
};
