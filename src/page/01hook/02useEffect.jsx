import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';

export default (props)=> {
  const [isOnline, setisOnline] = useState(null);

  function handleStatusChange(status) {
    setisOnline(status.isOnline)
  }
  // useEffect(() => {
  //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  //   return () => {
  //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //   };
  // });
  if(isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}
