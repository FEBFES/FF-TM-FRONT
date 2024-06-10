import React from 'react';
import { SectionTitle } from '../section-title/section-title';
import { Button, Form, Input, Space, Spin } from 'antd';
import { useTypedSelector } from '../../../../hooks/redux';
// import { IUserState } from '../../../../__data__/slices/user-info';
import { LoadingOutlined } from '@ant-design/icons';

export const ProfileInfo: React.FC = () => {
  // const user: IUserState = useTypedSelector((state) => state.user);

  // const changeUserInfo = () => {
  //   const data = {
  //     email: inputEmail,
  //     username: inputUsername,
  //     firstName: inputFirstName,
  //     lastName: inputLastName,
  //     displayName: inputDisplayName,
  //   };
  //   dispatch(fetchChangeUserInfo({ userId: id, data }));
  // };

  const onFinish = (e: any) => {
    // console.log(e);
  };

  // if (!user) {
  //   return (
  //     <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
  //   );
  // }

  return (
    <div>
      <SectionTitle
        title={'Информация'}
        desc={'Управляйте своим профилем F/F'}
      />

      <Form
        layout={'vertical'}
        onFinish={onFinish}
        // initialValues={{
        //   username: user.username,
        //   displayName: user.displayName,
        //   email: user.email,
        //   firstName: user.firstName,
        //   latName: user.lastName,
        // }}
      >
        <Form.Item
          label="Почта"
          name="email"
          rules={[{ type: 'email', message: 'Не валидный тип почты' }]}
        >
          <Input type={'email'} placeholder={'Почта'} size={'large'} />
        </Form.Item>

        <Form.Item label="Логин" name="username">
          <Input placeholder={'Логин'} size={'large'} />
        </Form.Item>

        <Form.Item label="Имя" name="firstName">
          <Input placeholder={'Имя'} size={'large'} />
        </Form.Item>

        <Form.Item label="Фамилия" name="lastName">
          <Input placeholder={'Фамилия'} size={'large'} />
        </Form.Item>

        <Form.Item label="Краткое имя" name="displayName">
          <Input placeholder={'Краткое имя'} size={'large'} />
        </Form.Item>

        <Space>
          <Button htmlType="reset">Сбросить</Button>

          <Button type="primary" htmlType="submit" loading>
            Обновить
          </Button>
        </Space>
      </Form>
    </div>
  );
};
