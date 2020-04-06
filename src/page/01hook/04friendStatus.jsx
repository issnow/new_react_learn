import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import useFriendStatus from './03自定义hook';
export default ()=> {
  const isOnline = useFriendStatus(false)
  if(isOnline === null) {
    return 'loading...'
  }
  return isOnline? 'online': 'offline'
}
