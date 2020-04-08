import React, { useState, useContext, useEffect, useCallback, useMemo,useReducer } from 'react';
// 1.指定初始 state
const initState = {
  count: 0
}
const INCREMENT = Symbol()
const DECREMENT = Symbol()
function reducer(state,action) {
  switch (action.type) {
    case INCREMENT:
      return {count:state.count+1}
    case DECREMENT:
      return {count:state.count-1}
    default:
      throw new Error()
  }
}
export default (props)=> {
  const [state, dispatch] = useReducer(reducer, initState);
  
 
  return (
    <>
      count:{state.count}<br/>
      <button onClick={()=>{dispatch({type: DECREMENT,payload:2})}}>-</button>
      <button onClick={()=>{dispatch({type: INCREMENT,payload:3})}}>+</button>
    </>
  )
}
