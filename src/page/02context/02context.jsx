import React, { Component } from 'react'
import { commonContext } from './commonContext'
import Son from './03son';
export default class toolbar extends Component {
  state = {
    config : {
      color: '#f40',
      backgroundColor: '#008000'
    }
  }
  render() {
    return (
      <commonContext.Provider value={this.state.config}>
        <Son></Son>
      </commonContext.Provider>
    )
  }
}
