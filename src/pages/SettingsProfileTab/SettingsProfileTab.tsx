import React, { useEffect, useState } from 'react';
import styles from './SettingsProfileTab.module.css';
import comStyle from '../SettingsPage/commonStyle.module.css';
import { faPen, faTrash, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useTypedSelector } from '../../hooks/redux';
import { serverString } from '../../config';
import { InputField } from '../../ui/InputField/InputField';
import { Button } from '../../ui/Button/Button';
import i18n from 'i18next';
import {
  fetchChangeUserInfo,
  fetchDeleteUserAvatar,
  fetchUploadNewUserAvatar,
} from '../../store/User/user.thunk';

interface ProfileTabProps {}

export const SettingsProfileTab: React.FC<
  ProfileTabProps
> = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { firstName, lastName, displayName, email, id, userPic, username } =
    useTypedSelector((state) => state.user);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const [inputEmail, setInputEmail] = useState<string>(email || '');
  const [userAvatar, setUserAvatar] = useState(userPic || null);
  const [inputUsername, setInputUsername] = useState<string>(username || '');
  const [inputFirstName, setInputFirstName] = useState<string>(firstName || '');
  const [inputLastName, setInputLastName] = useState<string>(lastName || '');
  const [inputDisplayName, setInputUserDisplayName] = useState<string>(
    displayName || ''
  );

  useEffect(() => {
    if (
      inputEmail !== email ||
      inputUsername !== username ||
      inputFirstName !== firstName ||
      inputLastName !== lastName ||
      inputDisplayName !== displayName
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
  }, [firstName, lastName, displayName, email, id, userPic, username]);

  const resetInputsData = () => {
    setInputEmail(email || '');
    setInputUsername(username || '');
    setInputFirstName(firstName || '');
    setInputLastName(lastName || '');
    setInputUserDisplayName(displayName || '');
    setUserAvatar(userPic || '');
  };

  const deleteUserAvatar = () => {
    dispatch(fetchDeleteUserAvatar(id));
  };

  const changeUserInfo = () => {
    const data = {
      email: inputEmail,
      username: inputUsername,
      firstName: inputFirstName,
      lastName: inputLastName,
      displayName: inputDisplayName,
    };
    dispatch(fetchChangeUserInfo({ userId: id, data }));
  };

  const uploadNewAvatar = async (e: any) => {
    const photo = e.target.files[0];
    const formData = new FormData();
    formData.append('image', photo);
    if (id)
      dispatch(
        fetchUploadNewUserAvatar({
          userId: id,
          userPic: userPic,
          formData: formData,
        })
      );
  };

  return (
    <div className={styles.profileTab}>
      <h1 className={comStyle.title}>
        {i18n.t('pages.settings.tabs.profile.title')}
      </h1>

      <div className={styles.userBackground} />

      <div className={styles.userAvatarCont}>
        {userAvatar ? (
          <img
            className={styles.userAvatarCont__image}
            src={`${serverString}${userAvatar}`}
            alt={i18n.t('utils.any.avatar')}
          />
        ) : (
          <FontAwesomeIcon icon={faCamera} size={'lg'} />
        )}
        {userPic && (
          <div
            className={`${styles.fileInput__btn} ${styles.fileInput_delete}`}
            onClick={deleteUserAvatar}
          >
            <FontAwesomeIcon icon={faTrash} size={'2xs'} />
          </div>
        )}
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
        <h2 className={comStyle.subtitle}>
          {i18n.t('pages.settings.tabs.profile.sectionTitle')}
        </h2>
        <p className={comStyle.text}>
          {i18n.t('pages.settings.tabs.profile.sectionSubTitle')}
        </p>

        <InputField
          withLabel
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          placeholder={i18n.t('utils.any.email')}
          type={'text'}
        />
        <InputField
          withLabel
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          placeholder={i18n.t('utils.any.username')}
          type={'text'}
        />
        <InputField
          withLabel
          value={inputFirstName}
          onChange={(e) => setInputFirstName(e.target.value)}
          placeholder={i18n.t('utils.any.firstname')}
          type={'text'}
        />
        <InputField
          withLabel
          value={inputLastName}
          onChange={(e) => setInputLastName(e.target.value)}
          placeholder={i18n.t('utils.any.lastname')}
          type={'text'}
        />
        <InputField
          withLabel
          value={inputDisplayName}
          onChange={(e) => setInputUserDisplayName(e.target.value)}
          placeholder={i18n.t('utils.any.displayName')}
          type={'text'}
        />
      </div>

      <div className={styles.btnContainer}>
        {!btnDisabled && (
          <Button theme={'danger'} onClick={resetInputsData}>
            {i18n.t('utils.buttons.back')}
          </Button>
        )}
        <Button
          disabled={btnDisabled}
          theme={'primary'}
          onClick={changeUserInfo}
        >
          {i18n.t('utils.buttons.update')}
        </Button>
      </div>
    </div>
  );
};
