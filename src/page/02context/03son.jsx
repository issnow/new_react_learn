import React, { Component } from 'react'
import {commonContext} from './commonContext'
export default class themeButton extends Component {
  static contextType = commonContext
  render() {
    console.log(this.context, 'context')
    return (
      <div style={this.context}>
        hello wrold
      </div>
    )
  }
}
