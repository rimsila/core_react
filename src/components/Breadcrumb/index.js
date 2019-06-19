import React from 'react';
import { Breadcrumb } from 'antd';
import './styles.scss';

const BreadcrumbItem = () => (
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>User</Breadcrumb.Item>
    <Breadcrumb.Item>Bill</Breadcrumb.Item>
  </Breadcrumb>
);

export default BreadcrumbItem;

