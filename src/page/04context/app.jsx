import React, { Component } from 'react'
// 通过静态方法React.createContext()创建一个Context对象，
// 这个Context对象包含两个组件，<Provider />和<Consumer />。
const ThemeContext  = React.createContext({
  background:'red',
  color:'white'
})
export default class app extends Component {
  render() {
    return (
      // <Provider />的value相当于现在的getChildContext()。
      <ThemeContext.Provider value={{background:'green',color:'white'}}>
        <Header></Header>
      </ThemeContext.Provider>
    )
  }
}
class Header extends React.Component {
  constructor(props,context){
    super(props,context)
    console.log(this,'header')
  }
  render () {
    return (
      <Title>Hello React Context API</Title>
    );
  }
}
 
class Title extends React.Component {
  constructor(props,context){
    super(props,context)
    console.log(this)
  }
  render () {
    console.log(this);
    return (
      <ThemeContext.Consumer>
        {/* <Consumer />的children必须是一个函数，通过函数的参数获取<Provider />提供的Context */}
        {/* {context => (
          <h1 style={{background: context.background, color: context.color}}>
            {this.props.children}
          </h1>
        )} */}
        {context => {
          console.log(context, 'context')
          return <h1 style={{background: context.background, color: context.color}}>
            {this.props.children}
          </h1>
        }}
      </ThemeContext.Consumer>
    );
  }
}
