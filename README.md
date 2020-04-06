### hooks使用
+ 什么是hook
  - Hook是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数
  - Hook 不能在 class 组件中使用
  - React 内置了一些像 useState 这样的 Hook。你也可以创建你自己的 Hook 来复用不同组件之间的状态逻辑
+ 什么时候我会用 Hook
  - 如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其它转化为 class。现在你可以在现有的函数组件中使用 Hook。
+ useState
  - 不像 class 中的 this.setState，更新 state 变量总是替换它而不是合并它
  - 1.函数式更新
    + 如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState。该函数将接收先前的 state，并返回一个更新后的值。下面的计数器组件示例展示了 setState 的两种用法：
    ```js
    function Counter (props) {
        const [count, setCount] = useState(0);
        return (
            <div>
            count:{count} <br/>
            <button onClick={()=>setCount(0)}>reset</button>
            <button onClick={()=>setCount(prevC=>++prevC)}>++</button>
            <button onClick={()=>setCount(prevC=>--prevC)}>--</button>
            </div>
        )
    }
    ```
  - 2.惰性初始state
    + initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用：
    ```js 
    const [state, setState] = useState(() => {
        const initialState = someExpensiveComputation(props);
        return initialState;
    });

    ```
+ useEffect
  - useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API
  - 通过跳过 Effect 进行性能优化
    + 1.在某些情况下，每次渲染后都执行清理或者执行 effect 可能会导致性能问题。在 class 组件中，我们可以通过在 componentDidUpdate 中添加对 prevProps 或 prevState 的比较逻辑解决：
    ```js
        componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                document.title = `You clicked ${this.state.count} times`;
            }
        }
    ```
    + 2.这是很常见的需求，所以它被内置到了 useEffect 的 Hook API 中。如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可：
    ```js
        useEffect(() => {
            document.title = `You clicked ${count} times`;
        }, [count]); // 仅在 count 更改时更新
    ```
    + 3.如果你要使用此优化方式，请确保数组中包含了所有外部作用域中会随时间变化并且在 effect 中使用的变量，否则你的代码会引用到先前渲染中的旧变量
    + 4.如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循依赖数组的工作方式。
    + 5.如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直拥有其初始值
    + 6.请记得 React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect，因此会使得处理额外操作很方便
  - 
+ hook 使用规则
  - Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：
    + 只在最顶层使用 Hook,不要在循环，条件或嵌套函数中调用 Hook
    + 只能在 React 的函数组件中调用 Hook。不要在普通的 JavaScript 函数中调用 Hook。在自定义 Hook 中调用其他 Hook

+ 自定义hook
  - 有时候我们会想要在组件之间重用一些状态逻辑。目前为止，有两种主流方案来解决这个问题：高阶组件和 render props。自定义 Hook 可以让你在不增加组件的情况下达到同样的目的
  - 自定义 Hook 更像是一种约定而不是功能。如果函数的名字以 “use” 开头并调用其他 Hook，我们就说这是一个自定义 Hook
### QA
+ 1.为什么 Hook 需要在我们组件的最顶层调用

