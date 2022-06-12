import React, { useEffect } from 'react'
import './App.css';
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import Routers from './router/Routers'

function App(props) {
  useEffect(() => {
    axios({
      url: '/api/mmdb/movie/v3/list/hot.json?ct=%E9%9B%B7%E5%B7%9E&ci=934&channelId=4',
      method: 'get'
    }).then(data => {
      // console.log(data)
    }).catch(err => {
      console.error(err)
    })
  }, [])
  return (
    <Routers />
  );
}
export default withRouter(App);
