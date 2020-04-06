import React, { Component } from 'react'
import {withAppContext} from './appContext'

@withAppContext
class son extends Component {
  render() {
    console.log(this.props, 'props');
    return (
      <div>
        {this.props.appContext.name}
      </div>
    )
  }
}
export default son
