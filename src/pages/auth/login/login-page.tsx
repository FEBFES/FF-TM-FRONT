import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { fetchLogin } from '../__data__/middleware/auth.thunk';
import { appRoutsPath } from '../../../routing/routs';
import { Typography, Divider, Button, Input, Space } from 'antd';

interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = (): JSX.Element => {
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
    <div>
      <Space direction="vertical">
        <Typography.Title>Вход</Typography.Title>
        <Input
          placeholder={'Логин'}
          type={'text'}
          size="large"
          value={inputData.username}
          onChange={(e) => changeHandle(e.target.value, 'username')}
        />
        <Input
          placeholder={'Пароль'}
          type={'password'}
          size="large"
          value={inputData.password}
          onChange={(e) => changeHandle(e.target.value, 'password')}
        />
        <Button type="primary" block onClick={submitHandler}>
          Войти
        </Button>

        <Divider />

        <Button
          block
          type="default"
          onClick={() => {
            navigate(appRoutsPath.RegistrationPage.to);
          }}
        >
          Создать новый аккаунт
        </Button>
      </Space>
    </div>
  );
};
