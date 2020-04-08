import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { Consumer,ColorContext } from './color'
export default (props)=> {
  const {color} = useContext(ColorContext)
  return (
    <>
      <p style={{color,fontSize:40}}>字体颜色为蓝色</p>
      {/* <Consumer>
        {
          ({color})=>(
            <p style={{color}}>字体颜色为蓝色</p>
          )
        }
      </Consumer> */}
    </>
  )
}
