import React, { Component } from 'react'
 // 1. 获取Consumer
import { ToggleConsumer } from './ToggleContext'

/**
 * 使用 Consumer
 */
export default class child1 extends Component {
  render() {
    return (
      <ToggleConsumer>
        {/* <ToggleConsumer />的children必须是一个函数，通过函数的参数获取<ToggleProvider />提供的Context(context对象) */}
        {({toggle,handleToggle})=>(
          <div onClick={()=>handleToggle()}>{toggle?'✔' : '❌'}</div>
        )}
      </ToggleConsumer>
    )
  }
}
