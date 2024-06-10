import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { appRoutsPath } from '../../../routing/route-list';
import { Typography, Divider, Button, Input, Space, Form, Flex } from 'antd';
import { loginRequestParam, loginThunk } from '../__data__/thunk/login';

interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [submittable, setSubmittable] = React.useState<boolean>(false);

  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  const submitHandler = (data: loginRequestParam) => {
    dispatch(loginThunk(data));
  };

  const registrationHandler = () => {
    navigate(appRoutsPath.RegistrationPage.to);
  };

  return (
    <Form
      form={form}
      name="wrap"
      labelAlign="left"
      layout="vertical"
      labelWrap
      colon={false}
      onFinish={submitHandler}
      style={{
        width: '300px',
      }}
    >
      <Flex justify={'center'}>
        <Typography.Title level={2}>Вход</Typography.Title>
      </Flex>

      <Form.Item
        label="Логин"
        name="username"
        rules={[
          { required: true, message: 'Поле обязательно' },
          { min: 5, max: 20, message: 'Кол-во символов от 5 до 20' },
        ]}
      >
        <Input size={'large'} placeholder={'Введите логин'} />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          { required: true, message: 'Поле обязательно' },
          { min: 4, max: 20, message: 'Кол-во символов от 5 до 20' },
        ]}
      >
        <Input
          size={'large'}
          placeholder={'Введите пароль'}
          type={'password'}
        />
      </Form.Item>

      <Form.Item label="">
        <Button disabled={!submittable} block type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>

      <Form.Item>
        <Button
          onClick={registrationHandler}
          block
          type="link"
          htmlType="submit"
        >
          Регистрация
        </Button>
      </Form.Item>
    </Form>
  );
};
