### context
+ 1.何时使用context
  - Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。
+ 2.api
  - 1.React.createContext
  ```js
  const MyContext = React.createContext(defaultValue);
  ```
    + 创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值
    + 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。这有助于在不使用 Provider 包装组件的情况下对组件进行测试。注意：将 undefined 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效。
  - 2.Context.Provider
  ```js
  <MyContext.Provider value={/* 某个值 */}>
  ```
  - 3.Class.contextType
    + 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。
    + 你只通过该 API 订阅单一 context。如果你想订阅多个，阅读使用多个 Context 章节(就是Context.Consumer的函数式用法)
  - 4.Context.Consumer
  ```js
  <MyContext.Consumer>
    {value => /* 基于 context 值进行渲染*/}
  </MyContext.Consumer>
  ```
  - 5.Context.displayName
