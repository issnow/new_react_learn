### hooks使用
+ 什么是hook
  - Hook是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数
  - Hook 不能在 class 组件中使用
  - React 内置了一些像 useState 这样的 Hook。你也可以创建你自己的 Hook 来复用不同组件之间的状态逻辑
+ 什么时候我会用 Hook
  - 如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其它转化为 class。现在你可以在现有的函数组件中使用 Hook。
+ useState
  - 不像 class 中的 this.setState，更新 state 变量总是替换它而不是合并它
+ effect hook
  - useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API
+ hook 使用规则
  - Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：
    + 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
    + 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，我们稍后会学习到。）

+ 自定义hook
  - 有时候我们会想要在组件之间重用一些状态逻辑。目前为止，有两种主流方案来解决这个问题：高阶组件和 render props。自定义 Hook 可以让你在不增加组件的情况下达到同样的目的
  - 自定义 Hook 更像是一种约定而不是功能。如果函数的名字以 “use” 开头并调用其他 Hook，我们就说这是一个自定义 Hook
