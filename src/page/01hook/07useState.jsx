import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
export default (props)=> {
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
