import React from 'react';
import { Menu } from 'antd';
import './styles.scss';
import { Link } from 'react-router-dom';
import {
  Layout, Icon
} from 'antd';

const { SubMenu } = Menu;
// const {Sider  } = Layout;


const SidebarLeft = () => (

  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    {/* <Menu.Item key="1">
    <Icon type="pie-chart" />
    <span > <Link to="/Hello">Test</Link></span>
    
  </Menu.Item>

  <Menu.Item key="2">
    <Icon type="desktop" />
    <span>Option 2</span>
  </Menu.Item> */}
    <SubMenu
      key="sub1"
      title={
        <span>
          <Icon type="user" />
          <span >Test</span>
        </span>
      }
    >
      <Menu.Item key="1"><Link to="/Hello">Test</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/Hello1">Test</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/Hello">Test</Link></Menu.Item>
    </SubMenu>
    <SubMenu
      key="sub2"
      title={
        <span>
          <Icon type="team" />
          <span>Team</span>
        </span>
      }
    >
      <Menu.Item key="4">  <span > <Link to="/Hello1">Test1</Link></span></Menu.Item>
      <Menu.Item key="5">Team 2</Menu.Item>
    </SubMenu>
    <SubMenu
      key="sub3"
      title={
        <span>
          <Icon type="team" />
          <span>Team</span>
        </span>
      }
    >
      <Menu.Item key="4">Team 1</Menu.Item>
      <Menu.Item key="5">Team 2</Menu.Item>
    </SubMenu>
    <SubMenu
      key="sub4"
      title={
        <span>
          <Icon type="team" />
          <span>Team</span>
        </span>
      }
    >
      <Menu.Item key="5">Team 1</Menu.Item>
      <Menu.Item key="6">Team 2</Menu.Item>
    </SubMenu>
    <SubMenu
      key="sub5"
      title={
        <span>
          <Icon type="team" />
          <span>Team</span>
        </span>
      }
    >
      <Menu.Item key="7">Team 1</Menu.Item>
      <Menu.Item key="8">Team 2</Menu.Item>
    </SubMenu>
    {/* <Menu.Item key="6">
    <Icon type="file" />
    <span>File</span>
  </Menu.Item> */}
  </Menu>


);

export default SidebarLeft;

