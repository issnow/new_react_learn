import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';

/**
 * 这个组件是自定义hook
 * 目的: 有时候我们会想要在组件之间重用一些状态逻辑。目前为止，有两种主流方案来解决这个问题：高阶组件和 render props。
 * 自定义 Hook 可以让你在不增加组件的情况下达到同样的目的。
 * 会给04和05使用
 */

export default (status)=> {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    setIsOnline(status)
    return () => {
      console.log('清除副作用');
      setIsOnline(null)
    }
  }, []);
  return isOnline
}
