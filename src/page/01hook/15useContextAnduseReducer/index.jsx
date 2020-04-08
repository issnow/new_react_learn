import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import Btns from './btns';
import Main from './main'
import {Color} from './color'
export default (props)=> {
  return (
    <Color>
      <Btns></Btns>
      <Main></Main>
    </Color>
  )
}
