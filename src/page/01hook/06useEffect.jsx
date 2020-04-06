import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { Button } from 'antd';
export default ()=> {
  const [count, setCount] = useState(0);
  const [type, setType] = useState(true);
  useEffect(() => {
    console.log(count, 'count')
  },[])
  useEffect(()=>{
    document.title = `you clicked ${count} times`
  },[count])
  return (
    <div>
      <h3> you clicked {count} times</h3>
      <Button type={type?'primary': 'dashed'}
        onClick={()=>{
          setCount(count+1)
        }}
      >click me</Button>
      <Button onClick={()=>{
        setType(!type)
      }}>click two</Button>
    </div>
  )
}


