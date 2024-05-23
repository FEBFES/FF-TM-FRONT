import React, { useState } from 'react';
import { Input, Typography, Button, Space, Divider } from 'antd';
import { useAppDispatch } from '../../../hooks/redux';
import { fetchRegistration } from '../store/auth.thunk';
import { IRegisterFormDataType } from '../store/auth.type';
import { useNavigate } from 'react-router-dom';
import { appRoutsPath } from '../../../routing/routs';
interface RegistrationPageProps {}

export const RegistrationPage: React.FC<
  RegistrationPageProps
> = (): JSX.Element => {
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
        <Typography.Title>Регистрация</Typography.Title>
        <Input
          placeholder={'Почта'}
          type={'email'}
          size="large"
          value={inputData.email}
          onChange={(e) => changeHandle(e.target.value, 'email')}
        />
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

        <Divider />

        <Button block type="primary" onClick={submitHandler}>
          Зарегистрироваться
        </Button>

        <Button type="link" href={appRoutsPath.LoginPage.to}>
          <Space>
            <span>У вас уже есть учетная запись?</span>

            <span>Войти</span>
          </Space>
        </Button>
      </Space>
    </div>
  );
};
