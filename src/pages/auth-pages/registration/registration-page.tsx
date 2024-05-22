import React, { useState } from 'react';
import { Input, Typography, Button, Space, Divider } from 'antd';
import { useAppDispatch } from '../../../hooks/redux';
import { fetchRegistration } from '../store/auth.thunk';
import { IRegisterFormDataType } from '../store/auth.type';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../../routing/routs';
import { useTranslation } from 'react-i18next';
interface RegistrationPageProps {}

export const RegistrationPage: React.FC<
  RegistrationPageProps
> = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [inputData, setInputData] = useState<IRegisterFormDataType>({
    email: '',
    username: '',
    password: '',
  });

  const submitHandler = () => {
    dispatch(fetchRegistration(inputData))
      .unwrap()
      .then(() => {
        navigate(appRoutsPath.LoginPage.to);
      });
  };

  const changeHandle = (data: string, label: any) => {
    setInputData({
      ...inputData,
      [label]: data,
    });
  };

  return (
    <div>
      <Space direction="vertical">
        <Typography.Title>{t('pages.registration.title')}</Typography.Title>
        <Input
          placeholder={t('pages.registration.input.email.placeholder')}
          type={'email'}
          size="large"
          value={inputData.email}
          onChange={(e) => changeHandle(e.target.value, 'email')}
        />
        <Input
          placeholder={t('pages.registration.input.username.placeholder')}
          type={'text'}
          size="large"
          value={inputData.username}
          onChange={(e) => changeHandle(e.target.value, 'username')}
        />
        <Input
          placeholder={t('pages.registration.input.password.placeholder')}
          type={'password'}
          size="large"
          value={inputData.password}
          onChange={(e) => changeHandle(e.target.value, 'password')}
        />

        <Divider />

        <Button block type="primary" onClick={submitHandler}>
          {t('pages.registration.button.submit')}
        </Button>

        <Button type="link" href={appRoutsPath.LoginPage.to}>
          <Space>
            <span>{t('pages.registration.login.label')}</span>

            <span>{t('pages.registration.login.action')}</span>
          </Space>
        </Button>
      </Space>
    </div>
  );
};
