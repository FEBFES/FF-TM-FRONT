import React, { useEffect, useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../../../../hooks/redux';
import i18n from 'i18next';
import { fetchChangeUserInfo } from '../../../../store/user/user.thunk';
import { getAvatarUrlOrHuman } from '../../../../utils/utils';
import { Typography, Input, Button, Avatar, Flex } from 'antd';
import {
  SUserBackground,
  SButtonsContainer,
  SUserAvatarContainer,
  SInputCont,
} from './settings-profile-tab.styled';
import { UserOutlined } from '@ant-design/icons';

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

  // const deleteUserAvatar = () => {
  //   dispatch(fetchDeleteUserAvatar(id));
  // };

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

  // const uploadNewAvatar = async (e: any) => {
  //   const photo = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append('image', photo);
  //   if (id)
  //     dispatch(
  //       fetchUploadNewUserAvatar({
  //         userId: id,
  //         userPic: userPic,
  //         formData: formData,
  //       })
  //     );
  // };

  return (
    <>
      <Typography.Title level={3}>Профиль</Typography.Title>

      <SUserBackground />

      <SUserAvatarContainer>
        <Avatar
          size={120}
          src={getAvatarUrlOrHuman(userAvatar)}
          alt={i18n.t('utils.any.avatar')}
          icon={<UserOutlined />}
        />
        {/*{userPic && (*/}
        {/*  <Button onClick={deleteUserAvatar}>*/}
        {/*    <FontAwesomeIcon icon={faTrash} size={'2xs'} />*/}
        {/*  </Button>*/}
        {/*)}*/}
        {/*<Button>*/}
        {/*  <FontAwesomeIcon icon={faPen} size={'2xs'} />*/}
        {/*</Button>*/}
        {/*<SFileInput id={'inputFIle'} onChange={uploadNewAvatar} type={'file'} />*/}
      </SUserAvatarContainer>

      <Flex>
        <div>
          <Flex vertical>
            <Typography.Title level={3}>
              Информация о пользователе
            </Typography.Title>
            <Typography.Text>Управляйте своим профилем F/F"</Typography.Text>
          </Flex>

          <SInputCont>
            <Input
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              placeholder={'Почта'}
              type={'text'}
              size={'large'}
            />
            <Input
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              placeholder={'Логин'}
              type={'text'}
              size={'large'}
            />
            <Input
              value={inputFirstName}
              onChange={(e) => setInputFirstName(e.target.value)}
              placeholder={'Имя'}
              type={'text'}
              size={'large'}
            />
            <Input
              value={inputLastName}
              onChange={(e: any) => setInputLastName(e.target.value)}
              placeholder={'Фамилия'}
              type={'text'}
              size={'large'}
            />
            <Input
              value={inputDisplayName}
              onChange={(e: any) => setInputUserDisplayName(e.target.value)}
              placeholder={'Краткое имя'}
              type={'text'}
              size={'large'}
            />

            <SButtonsContainer>
              {!btnDisabled && (
                <Button onClick={resetInputsData}>Сбросить</Button>
              )}
              <Button disabled={btnDisabled} onClick={changeUserInfo}>
                Обновить
              </Button>
            </SButtonsContainer>
          </SInputCont>
        </div>

        <Flex vertical>
          <Input />
          <Input />
          <Input />
        </Flex>
      </Flex>
    </>
  );
};
