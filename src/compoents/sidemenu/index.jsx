import React, { useEffect, useState } from 'react'

import { withRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
  UserOutlined
} from '@ant-design/icons';
import axios from 'axios'

import './index.css'
import SubMenu from 'antd/lib/menu/SubMenu'; 
const meunList = [
  {
    "key": "/home",
    "label": "首页",
    "icon": <UserOutlined />
  },
  {
    "key": "/user-manage",
    "label": "用户管理",
    "icon": <UserOutlined />,
    "children": [
      {
        "key": "/user-manage/list",
        "label": "用户列表",
        "icon": ""
      }
    ]
  },
  {
    "key": "/right-manage",
    "label": "权限管理",
    "icon": <UserOutlined />,
    "children": [
      {
        "key": "/right-manage/role/list",
        "label": "角色列表",
        "icon": ""
      },
      {
        "key": "/right-manage/right/list",
        "label": "权限列表",
        "icon": ""
      }
    ]
  }
]


//? const items = [
//?   getItem('首页', '1', <UserOutlined />),
//?   getItem('Option 2', '2', <DesktopOutlined />),
//?   getItem('Option 3', '3', <ContainerOutlined />),
//?   getItem('Navigation One', 'sub1', <MailOutlined />, [
//?     getItem('Option 5', '5'),
//?     getItem('Option 6', '6'),
//?     getItem('Option 7', '7'),
//?     getItem('Option 8', '8'),
//?   ]),
//?   getItem('用户管理', 'sub2', <AppstoreOutlined />, [
//?     getItem('Option 9', '9'),
//?     getItem('Option 10', '10'),
//?     getItem('Submenu', 'sub3'),
//?   ]),
//? ];
function SideMenu(props) {

  const p = props.location.pathname
  const [meu, setMeu] = useState([])
  const [collapsed] = useState(false);
  const [his, setHis] = useState(p);

  useEffect(() => {
    axios({
      url: 'http://localhost:8000/rights?_embed=children'
    }).then(d => {
      setMeu(d.data)
    }).catch(e => {
      console.error(e)
    })
  }, [])

  const items = meu.map((item) => item)  
  const { Sider } = Layout;
  const renderMenu = (menulist) => {
    return menulist.map(item => {
      if (item.children) {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.label}> {renderMenu(item.children)}</SubMenu>
        )
      }
      return <Menu.Item onClick = {e=>props.history.push(e.key)} key={item.key} icon={item.icon}>{item.label}</Menu.Item>
    })
  } 
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" >新闻发布管理系统</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[his]}
        // inlineCollapsed={collapsed}
        items={items}
        onClick={(e) => {
          props.history.push(e.key)
          setHis(e.key)
        }}
      >
        {/* {renderMenu(meu)} */}
      </Menu>
    </Sider>
  )
}
export default withRouter(SideMenu)