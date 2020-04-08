import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
const colorContext = React.createContext({
  color: '#008000',
  fontSize: 14
})

export default ()=> {
  const [style, setcolor] = useState({color:'#f40',fontSize:30});
  return (
    <colorContext.Provider value={style}>
      <Son></Son>
    </colorContext.Provider>
  )
}
function Son(props){
  return (
    <div>
      <GroundSon></GroundSon>
    </div>
  )
}

function GroundSon(props){
  const color = useContext(colorContext);
  return (
    <div style={{color:color.color,fontSize: color.fontSize}}>
      hello world
    </div>
  )
}