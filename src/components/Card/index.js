/* eslint-disable */

import React, { Component } from 'react';
import { Col,Card } from 'antd';
// import './styles.scss';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import PropTypes from 'prop-types'
// import { Mock } from './mock';

// const { SubMenu } = Menu;



const CardItem = (props) => {

  const {

    navLinkTitle,

  } = props.mock

  return (
 
      <Col span={8} style={{ background: '#ECECEC', paddingBottom: '30px' }}>
        <Card title="Card title" bordered={false}>
        {navLinkTitle}
        </Card>
      </Col>


  );

}

export default CardItem;

