import React, { useState, useContext, useEffect, useCallback, useMemo,useRef } from 'react';
/**
 * 1.useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）
 * 2.useRef() 比 ref 属性更有用。它可以很方便地保存任何可变值，其类似于在 class 中使用实例字段的方式。
 * 这是因为它创建的是一个普通 Javascript 对象。而 useRef() 和自建一个 {current: ...} 对象的唯一区别是，useRef 会在每次渲染时返回同一个 ref 对象。
 * 
 */
export default props=> {
  const inputEl = useRef(null)
  const [text, setText] = useState('guocheng');
  const textRef = useRef()
  useEffect(() => {
    textRef.current = text
    console.log(textRef.current, 'textRef.current');
  })
  return (
    <>
      <input type="text" ref={inputEl}/>
      <button onClick={()=>{
        inputEl.current.focus()
        inputEl.current.value = 'hello world'
      }}>click me</button>
      <input type="text" value={text} onChange={e=>{setText(e.target.value)}}/>
    </>
  )
}
