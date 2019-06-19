/* eslint-disable */

import React, { Component } from 'react';
import { Menu } from 'antd';
import './styles.scss';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import PropTypes from 'prop-types'
// import { Mock } from './mock';

const { SubMenu } = Menu;



const NavItemLeft = (props) => {

  const {
    key,
    icon,
    navLinkTitle,
    navLink,
    navTitle,
  } = props.mock

  return (
    <div>

<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

    <SubMenu
      key={`sub${key}`}
      title={
        <span>
          <Icon type={icon} />
          <span >{navTitle}</span>
        </span>
      }
    >
      <Menu.Item key={key}>
        <Link to={navLink}>{navLinkTitle}</Link>
      </Menu.Item>
    </SubMenu>


</Menu>
    </div>

  );

}

export default NavItemLeft;

