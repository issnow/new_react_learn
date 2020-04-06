import React, { Component } from 'react'
import Child1 from './child1.jsx.js';
import Child2 from './child2.jsx.js';
import PropTypes from 'prop-types'

export default class App extends Component {
  state = {
    name: 'guocheng',
    age: 27
  }
  // 父组件声明自己支持 context
  static childContextTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changeFn:PropTypes.func
  }
  // 父组件提供一个函数，用来返回相应的 context 对象
  getChildContext(){
    return {
      name: this.state.name,
      age: this.state.age,
      changeFn: this.changeAge
    }
  }
  changeAge =(v)=>{
    this.setState(preState=>({
      age: preState.age+v
    }))
  }
  render() {
    return (
      <div>
        {/* <Child1 {...this.state} changeFn={this.changeAge}></Child1> */}
        <Child2></Child2>
      </div>
    )
  }
}
