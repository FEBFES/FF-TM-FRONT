import React from 'react';
import { Col, Row, Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export interface AuthLayoutProps {
  children: React.ReactNode;
}

const layoutStyle = {
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
};

const contentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
}): JSX.Element => {
  return (
    <Layout style={layoutStyle}>
      <Content style={contentStyle}>{children}</Content>
    </Layout>
  );
};
