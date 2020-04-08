import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { ColorContext,UPDATE_COLOR } from './color';
export default (props)=> {
  const {dispatch} = useContext(ColorContext)
  
  return (
    <div>
      <button onClick={()=>dispatch({type:UPDATE_COLOR,payload:'red'})}>红色</button>
      <button onClick={()=>dispatch({type:UPDATE_COLOR,payload:'#008000'})}>绿色</button>
    </div>
  )
}
