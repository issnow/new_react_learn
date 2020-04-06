import React, { Component } from 'react'
import {ToggleContext,ToggleConsumer} from './baseContext'
export default class son extends Component {
  
  /**
   * 子组件具体使用context两种用法:
   * 1.contextType
   * 2.Consumer
   */


  static contextType = ToggleContext
  render() {
    console.log(this.context, 'context')
    return (
      <div>
        <h3>son组件</h3>
        <ToggleConsumer>
          {
            ({toggle,handleToggle})=>(
              <div>
                <h3>{toggle?'true':'false'}</h3>
                <button onClick={handleToggle}>click me!</button>
              </div> 
            )
          }
        </ToggleConsumer>
      </div>
    )
  }
}
