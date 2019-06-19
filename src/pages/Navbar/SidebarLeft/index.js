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

      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <NavLogo />
        <SidebarLeftItem />
      </Sider>

    )
  }
}


