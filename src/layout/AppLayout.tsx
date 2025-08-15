import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Hero from '../components/Hero/Hero'; 

const { Header, Content, Footer } = Layout;

export default function AppLayout() {
  return (
    <Layout>
      <Header style={{ color: '#1c1b1bff' }}>My App</Header> 
      <Hero /> 
      <Content style={{ padding: '20px' }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>© 2025</Footer>
    </Layout>
  );
}
