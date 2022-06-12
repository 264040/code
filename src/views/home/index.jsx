import React from 'react'
import axios from 'axios'

export default function Hoem() {
  const btnaxios = (e) => {
    axios({
      url: `http://localhost:8000/posts/1?_embed=comment`,
      
    }).then((result) => {
      console.log(result.data)
    }).catch((err) => {
      console.log(err);
    });
  }
  return (
    <div>
      hoem
      <button onClick={() => btnaxios(12)} >获取数据</button>
    </div>
  )
}
