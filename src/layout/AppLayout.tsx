import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import NavBar from '../pages/Home/Sections/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
const { Content, } = Layout;

export default function AppLayout() {
  return (
    <Layout style={{ minHeight: '' }}>
      <Header /> { }
      <Content style={{ padding: '0px' }}>
        <div style={{ marginTop: '20px' }}>
          <Outlet />
        </div>
      </Content> 
      <Footer/>
      
      <NavBar/> 
      
    </Layout>
  );
}
