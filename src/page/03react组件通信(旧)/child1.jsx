import React, { Component } from 'react'
import { Button } from 'antd'
// 通过props传值
export default class child1 extends Component {
  render() {
    const {name,age, changeFn} = this.props
    return (
      <div>
        <p>name:{name}</p>
        <p>age:{age}</p>
        <Button type='primary' onClick={()=>{
          changeFn(1)
        }}>changeAge</Button>
      </div>
    )
  }
}
