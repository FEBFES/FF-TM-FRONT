import React from 'react';
import { LoginForm } from '../modules/login-form/login-form';
import { Col, Row, Layout, Flex } from 'antd';
const { Header, Content, Footer } = Layout;

interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = (): JSX.Element => {
  return (
      // <Flex justify='center' align='center'>
        <LoginForm />
      // </Flex>
  );
};
