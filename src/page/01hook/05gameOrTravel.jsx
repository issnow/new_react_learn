import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import useFriendStatus from './03自定义hook'
export default ()=> {
  const isOnline = useFriendStatus(false)
  return (
    <div>
      {
        isOnline?(
          <p style={{color: 'green'}}>computer game</p>
        ):(
          <p style={{color: 'orange'}}>go to shopping</p>
        )
      }
    </div>
  )
}
