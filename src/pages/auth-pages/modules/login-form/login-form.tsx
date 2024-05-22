import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/redux';
import { fetchLogin } from '../../store/auth.thunk';
import { appRoutsPath } from '../../../../routing/routs';
import { useTranslation } from 'react-i18next';
import { Typography, Divider, Button, Input, Flex, Col, Row, Space } from 'antd';

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [inputData, setInputData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const submitHandler = () => {
    dispatch(fetchLogin(inputData))
      .unwrap()
      .then(() => {
        navigate(appRoutsPath.ProjectPage.to);
      });
  };

  const changeHandle = (inputStr: string, label: string) => {
    setInputData({
      ...inputData,
      [label]: inputStr,
    });
  };

  return (
    <Flex vertical align='center' justify='center' style={{height: '100%'}}>
        <Space size="middle" direction='vertical'>
        <Typography.Title>{t('pages.login.form.title')}</Typography.Title>
        <Input
          placeholder={t('pages.login.form.input.username.placeholder')}
          type={'text'}
          size='large'
          value={inputData.username}
          onChange={(e) => changeHandle(e.target.value, 'username')}
        />
        <Input
          placeholder={t('pages.login.form.input.password.placeholder')}
          type={'password'}
          size='large'
          value={inputData.password}
          onChange={(e) => changeHandle(e.target.value, 'password')}
        />
        <Button
          type='primary'
          block
          onClick={submitHandler}
        >
          {t('pages.login.form.button.submit')}
        </Button>

        <Divider />

        <Button
          block
          type='default'
          onClick={() => {
            navigate(appRoutsPath.RegistrationPage.to);
          }}
        >
          {t('pages.login.form.button.newAcc')}
        </Button>
        </Space>
    </Flex>
  );
};
