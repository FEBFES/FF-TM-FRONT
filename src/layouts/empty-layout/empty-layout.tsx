import React from 'react';
import { useTitle } from '../../hooks/use-title';
import { Col, Row, Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default interface EmptyLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
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

export const EmptyLayout: React.FC<EmptyLayoutProps> = ({
  children,
  pageTitle,
}): JSX.Element => {
  useTitle(pageTitle);

  return <Layout style={layoutStyle}>
    <Content style={contentStyle}>
      {children}
    </Content>
  </Layout>;
};
