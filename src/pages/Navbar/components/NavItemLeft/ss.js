/* eslint-disable */

import React, { Component } from 'react';
import { Menu } from 'antd';
import './styles.scss';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import PropTypes from 'prop-types'
// import { Mock } from './mock';

const { SubMenu } = Menu;
const Mock = [
  {
    NavTitle: 'DESCRIPTION11',
    data: {
      project: 'Project: Forbeswood Heights',
      referenceNumber: ' Reference Number: FWH-R116',
      unitDetails: 'Unit Details: One Bedroom Unit',
      desc1: '48 square meter',
      desc2: ' Fully Furnished'
    }
  },
  {
    NavTitle: 'UNIT DETAILS',
    data: {
      project: 'Project22222: Forbeswood Heights',
      referenceNumber: ' Reference Number: FWH-R116',
      unitDetails: 'Unit Details: One Bedroom Unit',
      desc1: '48 square meter',
      desc2: ' Fully Furnished'
    }
  },

];


const SidebarLeft = ({ NavTitle, NavLink, NavLinkTitle }) => (


  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

    {Mock.map((item, index) => {
      return (

        <SubMenu
          key={`sub${index}`}
          title={
            <span>
              <Icon type="user" />
              <span >{item.NavTitle}</span>
            </span>
          }
        >
          <Menu.Item key={index}>
            <Link to={NavLink}>{NavLinkTitle}</Link>
          </Menu.Item>
        </SubMenu>
      );

    })}





  </Menu>


);

SidebarLeft.propTypes = {
  NavTitle: PropTypes.string,
  NavLink: PropTypes.string,
  NavLinkTitle: PropTypes.string,
};

SidebarLeft.defaultProps = {
  NavTitle: "item",
  NavLink: "/",
  NavLinkTitle: "item",
};


export default SidebarLeft;

