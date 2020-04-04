import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
export default (props) =>{
  const [time, setTime] = useState('');
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString())
    }, 500);    
  }, []);
  return (
    <div>
      现在的北京时间是{time}
    </div>
  )
}
