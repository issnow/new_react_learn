import React, { useState, useReducer, useContext, useEffect, useCallback, useMemo } from 'react';
// 2.惰性初始化

// (1)需要将 init 函数作为 useReducer 的第三个参数传入，这样初始 state 将被设置为 init(initialArg)。
const init = count=>({count})
function reducer(state,action) {
  switch (action.type) {
    case 'increment':
      return {count:state.count+action.payload}
    case 'decrement':
      return {count:state.count-action.payload}
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}
export default ({initCount=0})=> {
  // initCount 是 init的参数作为第二项,init函数作为第3项
  const [state,dispatch] = useReducer(reducer,initCount,init)
 
  return (
    <>
      Count:{state.count} <br/>
      <button onClick={()=>{dispatch({type:'reset',payload:initCount})}}>reset</button>
      <button onClick={()=>{dispatch({type:'increment',payload:2})}}>+</button>
      <button onClick={()=>{dispatch({type:'decrement',payload:1})}}>-</button>
    </>
  )
}
