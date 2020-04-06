import React, { Component } from 'react'
import appContext from './appContext'
import Son from './son';
export default class index extends Component {
  render() {
    return (
      <appContext.Provider value={{
        name: 'guocheng',
        age:27
      }}>
        <Son></Son>
      </appContext.Provider>
    )
  }
}
