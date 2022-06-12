import React, { useState } from 'react'
// import { HeadRouteS } from '../router/indexRouter.js'
// import { renderRoutes } from 'react-router-config';
import { Redirect, Switch, Route } from 'react-router-dom'
import Front from '../views/Front';
import Login from '../views/login';


export default function Routers(props) { 

  const [state] = useState(
    { storage: localStorage.getItem("token") }
  )

  return (
    <>

      {/* <div>
        {
          state.storage ? <NavLink to='/front'>mine</NavLink> : <NavLink to='/login'>login</NavLink>
        }
      </div>
      <div><NavLink to='/login'>登录</NavLink></div> */}
      <Switch>
        <Route path='/' render={() => state.storage ? <Front /> : <Redirect to='/login' />} />
        <Route path='/login' component={Login} />
        {/* {renderRoutes(HeadRouteS)} */}
      </Switch>
    </>
  )
}
