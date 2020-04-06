import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { Button } from 'antd'
export default (props)=> {
  const [count, setcount] = useState(0);

  // 声明多个state变量
  const [age, setAge] = useState(41);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{text:'learn hooks'}]);
  // ...

  useEffect(() => {
    document.title = `you clicked ${count} times`
  });
  return (
    <div>
      <h3>hook简介</h3>
      <p>you clicked {count} times</p>
      <Button type='primary' onClick={()=>{
        setcount(count+1)
      }}>
        click me 
      </Button>
    </div>
  )
}
