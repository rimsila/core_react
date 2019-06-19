import React, { Component } from 'react';
import { Layout, Card, Col, Row } from 'antd';
// import NavLogo from './components/NavLogo';
import SidebarLeft from './SidebarLeft';
import SidebarLeft2 from './SidebarLeft2';

// const { Sider } = Layout

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
                <SidebarLeft />
                {/* ===================== */}
              </Layout>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false} extra={<a href="#">Source</a>}>
              <Layout style={{ background: '#fff' }}>
                {/* ===================== */}
                <SidebarLeft />
                {/* ===================== */}
              </Layout>
            </Card>
          </Col>

        </Row>
      </div>

    )
  }
}


