import React, { useState } from 'react'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined, 
  UserOutlined
} from '@ant-design/icons';

import { Layout, Dropdown, Menu, message, Avatar } from 'antd';
import './index.css'


const { Header } = Layout;
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const menu = (
  <Menu
    onClick={onClick}
    items={[
      {
        key: '1',
        label: '超管'
      },
      {
        key: '2',
        label: '退出登录',
        danger: true,
      },
    ]}
  />
);

function TopHeader(props) { 
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Header className="site-layout-background site-layout-background-flex" style={{ padding: '0 16px' }}>
      {
        collapsed ? <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} /> : <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} />
      }
      <div>
        <span>欢迎回来</span>
        <Dropdown overlay={menu}>
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  )
}
export default  TopHeader