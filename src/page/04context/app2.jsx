import React, { Component } from 'react'

import Child1 from './child1';
import Child2 from './child2';

/**
 * 使用 Provider
 * ToggleProvider 组件包装了一系列共享的状态，为了使用这些组件的状态，我们直接将其添加到 App 组件中：
 * 使用 Provider 比较简单直接作为父组件包裹在上层即可。如果组件内部有其他多个组件，
 * 这些组件都可以共享 Provider 提供的 state
 */
import { ToggleProvider } from './ToggleContext'// 1. 获取 Provider
export default class app2 extends Component {
  // 2-1. 使用 ToggleProvider 组件
  // 2-2. 如果有其他组件一样可以共享 state
  render() {
    return (
      <ToggleProvider>
        <Child1></Child1>
        {/* <Chiild2></Chiild2> */}
      </ToggleProvider>
    )
  }
}
