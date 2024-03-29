import React, { useEffect, useState } from 'react';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import i18n from 'i18next';
import {
  fetchChangeUserInfo,
  fetchDeleteUserAvatar,
  fetchUploadNewUserAvatar,
} from '../../../../store/user/user.thunk';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { Title, Text, InputField, Space, Button, Avatar } from '../../../../ui';
import {
  SUserBackground,
  SButtonsContainer,
  SFileInput,
  SUserAvatarContainer,
  FileInputDelete,
  FileInputLabel,
} from './settings-profile-tab.styled';

interface ProfileTabProps {}

export const SettingsProfileTab: React.FC<
  ProfileTabProps
> = (): JSX.Element => {
  //TODO refactor all page
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
    <>
      <Title level={'h3'}>{i18n.t('pages.settings.tabs.profile.title')}</Title>
      <Space direction={'col'} size={'xl'} />

      <SUserBackground />

      <SUserAvatarContainer>
        <Avatar
          size={'2xl'}
          src={getAvatarUrlOrHuman(userAvatar)}
          alt={i18n.t('utils.any.avatar')}
        />
        {userPic && (
          <FileInputDelete onClick={deleteUserAvatar}>
            <FontAwesomeIcon icon={faTrash} size={'2xs'} />
          </FileInputDelete>
        )}
        <FileInputLabel htmlFor="inputFIle">
          <FontAwesomeIcon icon={faPen} size={'2xs'} />
        </FileInputLabel>
        <SFileInput id={'inputFIle'} onChange={uploadNewAvatar} type={'file'} />
      </SUserAvatarContainer>

      <>
        <Title level={'h4'}>
          {i18n.t('pages.settings.tabs.profile.sectionTitle')}
        </Title>
        <Text>{i18n.t('pages.settings.tabs.profile.sectionSubTitle')}</Text>
        <Space direction={'col'} size={'m'} />

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
      </>

      <SButtonsContainer>
        {!btnDisabled && (
          <Button variant={'danger'} onClick={resetInputsData}>
            {i18n.t('utils.buttons.reset')}
          </Button>
        )}
        <Button
          disabled={btnDisabled}
          variant={'primary'}
          onClick={changeUserInfo}
        >
          {i18n.t('utils.buttons.update')}
        </Button>
      </SButtonsContainer>
    </>
  );
};
