import React, { Component,createContext } from 'react'

// 1. 使用 createContext 创建上下文
const ToggleContext = createContext({
  toggle:true,
  handleToggle:()=>{}
})
// 通过静态方法React.createContext()创建一个Context对象，
// 这个Context对象包含两个组件，<Provider />和<Consumer />。

// 2. 创建 Provider
export class ToggleProvider  extends Component {

  // 注意书写顺序
  handleToggle=()=>{
    this.setState({
      toggle:!this.state.toggle
    })
  }

  // 2-1. 重写 state 
  state={
    toggle:true,
    handleToggle:this.handleToggle
  }

  render() {
    // 2-2. 通过 Provider 组件的 value 将 state 提供出去
    return (
      // <Provider />的value相当于现在的getChildContext()。
      <ToggleContext.Provider value={this.state}>
        {this.props.children}
      </ToggleContext.Provider>
    )
  }
}

// 3.创建Consumer
export const ToggleConsumer = ToggleContext.Consumer

// 我们理一下步骤
// 首先，我们需要引入 createContext 上下文并调用，传入我们希望在其他层级组件中使用的 state 和改变 state 的方法
//      注意:这里的 state 和方法只是一个“骨架”，后面的 Provider 会覆盖
// 接下来创建 Provider 这里头维护真正的 state，并通过 render 函数里面的 Context.Provider 组件的 value 属性提供这些方法
// 然后创建 Consumer，直接导出 Context.Consumer 给外部使用即可