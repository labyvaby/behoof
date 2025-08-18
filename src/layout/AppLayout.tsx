import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';

const { Content, Footer } = Layout;

export default function AppLayout() {
  return (
    <Layout style={{ minHeight: '' }}>
      <Header /> {}
      <Content style={{ padding: '20px' }}>
        <Hero /> 
        <div style={{ marginTop: '20px' }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© 2025</Footer>
    </Layout>
  );
}
