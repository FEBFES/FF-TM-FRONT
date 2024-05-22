import React from 'react';
import { Sidebar } from '../../components/sidebar/sidebar';
import { useTitle } from '../../hooks/use-title';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  height: 48,
  paddingInline: 48,
};

const layoutStyle = {
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
};

export interface MainLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  pageTitle,
}): JSX.Element => {
  useTitle(pageTitle);

  return (
    <Layout style={layoutStyle}>
      <Sidebar />
      <Layout>
        <Header style={headerStyle}></Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>

  // <SMainLayout>
  //   <Sidebar />
  //   <SPage>{children}</SPage>
  // </SMainLayout>
  );
};
