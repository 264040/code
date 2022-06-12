import React from 'react'
import SideMenu from '../../compoents/sidemenu'
import TopHeader from '../../compoents/topheader'

import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'

import Home from '../home'
import UserList from '../userlist'
import RoleList from '../rolelist'
import RightList from '../rightlist'
import Nopermission from '../nopermission'

export default function Front(porps) { 
const {Content} = Layout;
  return (
    <Layout>
      <SideMenu />
      <Layout className="site-layout">
        <TopHeader />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        > 
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/user-manage/list' component={UserList} />
          <Route path='/right-manage/role/list' component={RoleList} />
          <Route path='/right-manage/right/list' component={RightList} />

          <Redirect from='/' exact to='/home' />
          <Route path='*' component={Nopermission} />
        </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}
