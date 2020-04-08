import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
/**
 * 这个hook和useCallback类似,做性能优化用的
 * 1.把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算
 *  memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算
 * 
 * 2.记住，传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操
 * 作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo
 * 
 * 3.如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。
 */
export default props=> {
  const [xiaohong, setXiaohong] = useState('小红待客');
  const [zhiling, setZhiling] = useState('志玲待客');
  return (
    <>
      <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
      <button onClick={()=>{setZhiling(new Date().getTime()+',志玲向我们走来')}}>志玲</button>
      <Child name={xiaohong}>
        {zhiling}
      </Child>
    </>
  )
}

function Child({name,children}){
  function changeXiaohong(name) {
    console.log('她来了,她来了,小红来了')
    return name+',小红走来了'
  }
  // const actionXiaohong = useMemo(changeXiaohong(name),[name])
  const actionXiaohong = useMemo(() => changeXiaohong(name), [name]);
  
  return (
    <>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </>
  )
}