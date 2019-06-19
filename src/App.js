import React from 'react';
import './App.scss';
import TopNavItem from './components/TopNavItem';
import MainLogo from './components/MainLogo';
import SidebarLeft from './components/SidebarLeft';
import Breadcrumb from './components/Breadcrumb';
import MainFooter from './components/MainFooter';
import { Layout } from 'antd';
import Main  from './components/Main';
const { Header, Content, Sider, Footer } = Layout;


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

        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <MainLogo />
          <SidebarLeft />
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <TopNavItem />
          </Header>

          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb />
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

            <Main />

            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            <MainFooter />
          </Footer>
        </Layout>

      </Layout>
    );
  }
}


