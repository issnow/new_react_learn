```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```
- useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。（如果你熟悉 Redux 的话，就已经知道它如何工作了。）
- 1.指定初始 state
  + 有两种不同初始化 useReducer state 的方式，你可以根据使用场景选择其中的一种。将初始 state 作为第二个参数传入 useReducer 是最简单的方法：
  ```js
  const [state, dispatch] = useReducer(
    reducer,
    {count: initialCount}
  );
  ```
- 2.惰性初始化