import React, { useState,useReducer, useContext, useEffect, useCallback, useMemo } from 'react';
export const ColorContext = React.createContext({})

export const UPDATE_COLOR = 'UPDATE_COLOR'
const initColor = {color:'blue'}
export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return {color:action.payload}
    default:
      return state
  }
}

export const Color = props=>{
  const [state, dispatch] = useReducer(reducer, initColor);
  
  return (
    // dispatch别忘了
    <ColorContext.Provider value={{color:state.color,dispatch}}>
      {props.children}
    </ColorContext.Provider>
  )
}
export const Consumer = ColorContext.Consumer