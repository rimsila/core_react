import React, { Component } from 'react';
import { Layout, Card, Col, Row } from 'antd';


import NavLogo from '../components/NavLogo';
import SidebarLeftItem from '../components/SidebarLeftItem';

const { Sider } = Layout

export default class SibarLeft extends Component {
  state = {
    collapsed: false,

  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (

      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              <Layout style={{ background: '#fff' }}>
                {/* ===================== */}
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                  <NavLogo />
                  <SidebarLeftItem />
                </Sider>
                {/* ===================== */}
              </Layout>
            </Card>
          </Col>

        </Row>
      </div>

    )
  }
}


