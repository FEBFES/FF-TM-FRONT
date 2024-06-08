import React from 'react';
import { Sidebar } from '../../components/sidebar/sidebar';
import { useTitle } from '../../hooks/use-title';
import { Layout } from 'antd';
import { Header } from '../../components/header/header';
const { Content } = Layout;

const layoutStyle = {
  // overflow: 'hidden',
  width: '100vw',
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
      <Layout
        style={{
          height: '100vh',
        }}
      >
        <Header />
        <Content
          style={{
            overflowY: 'scroll',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>

  // <SMainLayout>
  //   <Sidebar />
  //   <SPage>{children}</SPage>
  // </SMainLayout>
  );
};
