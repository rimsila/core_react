import React from 'react';
import './App.scss';
import TopNavItem from './components/TopNavItem';
import MainLogo from './components/MainLogo';
import SidebarLeft from './components/SidebarLeft';
import Breadcrumb from './components/Breadcrumb';
import MainFooter from './components/MainFooter';
import { Layout, BackTop } from 'antd';
import MainContent from './pages/content';


const { Header, Content, Sider } = Layout;


export default class App extends React.Component {
  state = {
    collapsed: false,

  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>

        {/* Sidebar Left */}
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}

          style={{ minHeight: '10vh' }}
        >
          <MainLogo />

          <SidebarLeft />
        </Sider>



        <Layout>
          {/* Top Navbar */}
          <Header style={{ background: '#fff', padding: 0 }}>
            <TopNavItem />
          </Header>

          {/* Main Content */}
          <Content style={{ margin: '0 16px' }}>

            <Breadcrumb />

            <div style={{ paddingLeft: 10, paddingRight: 10, background: '#fff', minHeight: 360, minWidth: '900px' }}>

              <MainContent />
            </div>

          </Content>

          <BackTop />
        </Layout>

      </Layout>
    );
  }
}


