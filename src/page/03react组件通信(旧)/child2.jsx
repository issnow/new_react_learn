import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import Child3 from './child3.jsx.js';
// 通过context传值
export default class child2 extends Component {
  // 子组件声明自己需要使用 context
  static contextTypes = {
    age: PropTypes.number,
    changeFn:PropTypes.func
  }
  constructor(props,context) {
    super(props,context)
    console.log(this.context, 'context');
  }
  render() {
    const {changeFn,age} = this.context
    // const {age} = this.props
    return (
      <div>
        <p>age: {age}</p>
        <Button onClick={()=>{
          changeFn(1)
        }}>click</Button>
        <Child3></Child3>
      </div>
    )
  }
}
